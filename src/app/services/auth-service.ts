import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, EMPTY, map, Observable, Subscription, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';
import { ParamsEmailVerify } from '../interfaces/Params-email-verify';
import { ResponseGlobalServer } from '../interfaces/Response-globalServer';
import { credentialsFormLogin } from '../interfaces/Credentials-form-login';
import { Auth } from '../classes/Auth';
import { credentialsFormForgot } from '../interfaces/Credentials-form-forgot';
import { ParamsPassword } from '../interfaces/Params-password';
import { credentialsFormOtp } from '../interfaces/Credentials-form-otp';
import { NavigationLoaderService } from '../core/navigation/navigation-loader.service';
import { RoleCreateUpdateModel } from '../models/role.model';
import { Roles } from '../interfaces/Roles';
import { VexConfigService } from '@vex/config/vex-config.service';
import { Menu } from '../interfaces/Menu';
import { WebsocketService } from './websocket.service';
import { saveReturnUrl } from '../guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private apiUrl = environment.apiUrl;
  private _user: User | null = null;
  private _response: ResponseGlobalServer | null = null;
  private blockStatusSubscription!: Subscription;

  public title$: Observable<string> = this.configService.select(
    (config) => config.sidenav.title
  );

  public image$ = this.configService.config$.pipe(
    map((config) => config.sidenav.imageUrl)
  );

  private _userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this._userSubject.asObservable();

  public site_description$: Observable<string> = this.configService.select(
    (config) => config.sidenav.description
  );
  public site_subtitle$: Observable<string> = this.configService.select(
    (config) => config.sidenav.site_subtitle
  );

  constructor(
    private readonly http: HttpClient,
    private readonly navigationLoader: NavigationLoaderService,
    private readonly configService: VexConfigService,
    private readonly router: Router,
    private readonly websocketService: WebsocketService
  ) {
  }

  getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/csrf-cookie`, {
      withCredentials: true
    });
  }

  getAllRole(
    page: number = 1,
    perPage: number = 5
  ): Observable<ResponseGlobalServer> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/roles`, {
      params
    });
  }

  searchRoles(searchTerm: string): Observable<ResponseGlobalServer> {
    const payload = {
      search: {
        value: searchTerm ? searchTerm.trim() : ''
      }
    };
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/roles/search`,
      payload
    );
  }

  createRole(payload: RoleCreateUpdateModel): Observable<Roles> {
    return this.http
      .post<ResponseGlobalServer>(`${this.apiUrl}/roles`, payload)
      .pipe(
        map((response) => {
          if (Array.isArray(response.data) && response.data.length > 0) {
            const role = response.data[0] as Roles;
            return role;
          }
          throw new Error('Invalid response data');
        })
      );
  }

  updateRole(
    roleId: number,
    roleData: RoleCreateUpdateModel
  ): Observable<ResponseGlobalServer> {
    return this.http.put<ResponseGlobalServer>(
      `${this.apiUrl}/roles/${roleId}`,
      roleData
    );
  }

  deleteRole(roleId: number): Observable<ResponseGlobalServer> {
    return this.http.delete<ResponseGlobalServer>(
      `${this.apiUrl}/roles/${roleId}`
    );
  }

  register(userData: User): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/register`,
      userData
    );
  }

  emailverify(paramsData: ParamsEmailVerify): Observable<ResponseGlobalServer> {
    const params = new HttpParams()
      .set('expires', paramsData.expires)
      .set('signature', paramsData.signature);

    return this.http.get<ResponseGlobalServer>(
      `${this.apiUrl}/email/verify/${paramsData.id}/${paramsData.hash}/${paramsData.uuid}`, { params });
  }

  login(credentials: credentialsFormLogin): Observable<ResponseGlobalServer> {
    return this.http
      .post<ResponseGlobalServer>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          if (response.user) {
            this.user = response.user;
          }
        })
      );
  }

  logout(isBlocked: boolean = false): Observable<any> {
    // Sauvegarder l'URL actuelle pour redirection après reconnexion
    saveReturnUrl(this.router.url);
    return this.http.get(`${this.apiUrl}/logout`).pipe(
      tap(() => {
        if (this.user) {
          const userId = this.user.id;
          if (typeof userId === 'number') {
            this.websocketService.disconnectListeners(userId);
          }
        }
        if (this.blockStatusSubscription) {
          this.blockStatusSubscription.unsubscribe();
        }
        this.user = null;
        if (!isBlocked) {
          this.router.navigate(['/login']);
        }
      })
    );
  }

  authenticate(): Observable<ResponseGlobalServer> {
    return this.http
      .get<ResponseGlobalServer>(`${this.apiUrl}/authenticate`)
      .pipe(
        tap((response) => {
          this.user = response.user || null;
          if (response.user && !response.user.is_blocked) {
            const userId = response.user.id;
            if (typeof userId === 'number') {
              this.websocketService.initListeners(userId);
            }
          }
        })
      );
  }

  public initBlockStatusCheck(): void {
    this.blockStatusSubscription = this.websocketService.blockStatusUpdate$.subscribe(
      (data: { is_blocked: boolean }) => {
        if (data.is_blocked) {
          this.router.navigate(['/user-blocked']).then(() => {
            this.logout(true).subscribe();
          });
        }
      }
    );
  }

  forgotPassword(
    email: credentialsFormForgot | null
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/forgot-password`,
      email
    );
  }

  ResenderVerificationEmail(
    credentials: credentialsFormForgot
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/email/verification-resend`,
      credentials
    );
  }

  validateToken(token: string, email: string) {
    return this.http.post(`${this.apiUrl}/validate-reset-token`, {
      token,
      email
    });
  }

  resetPassword(credentials: ParamsPassword): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/reset-password`,
      credentials
    );
  }

  changePassword(
    credentials: ParamsPassword
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/reset-password`,
      credentials
    );
  }

  verificationOtp(
    credentials: credentialsFormOtp
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/verify-otp`,
      credentials
    );
  }

  ResenderOtp(
    credentials: credentialsFormOtp
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/send-otp`,
      credentials
    );
  }

  UpdateOtp(credentials: credentialsFormOtp): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/toggle-otp`,
      credentials
    );
  }

  get user(): User | null {
    return this._user;
  }

  set user(value: User | null) {
    this._user = value;
    this._userSubject.next(value);
    if (value !== null) {
      Auth.userEmitter.emit(value);
      Auth.user = value;
    }
  }

  get response(): ResponseGlobalServer | null {
    return this._response;
  }

  set response(value: ResponseGlobalServer | null) {
    try {
      if (value !== null) {
        Auth.responseServerEmitter.emit(value);
        Auth.response = value;
      }
      this._response = value;
    } catch (error) {
      console.error('Error setting response:', error);
    }
  }

  getRolesNames(): string[] {
    return this.user?.roles?.map((permission) => permission.name) || [];
  }

  getPermissionNames(): string[] {
    return this.user?.permissions?.map((permission) => permission.name) || [];
  }

  getAllPermission(): string[] {
    const userPermissions = this.getPermissionNames();
    const userRoles = this.getRolesNames();
    const allPermissions = [...new Set([...userPermissions, ...userRoles])];
    return allPermissions;
  }

  getMenuByRole(
    rolesNames: string[],
    unreadCount$?: Observable<number>,
    chatUnreadCount$?: Observable<number>,
    resolverData?: Menu[]
  ) {
    this.navigationLoader.loadNavigation(
      rolesNames,
      unreadCount$,
      chatUnreadCount$,
      resolverData
    );
  }

  getAllCountry(): Observable<ResponseGlobalServer> {
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/countries`);
  }

  getuserItemsinfos() {
    return Auth.getuserInfos();
  }

  isUserBlocked(): boolean {
    return this.user?.is_blocked === true;
  }

  canAccessApplication(): boolean {
    return this.user !== null && !this.isUserBlocked();
  }

  ngOnDestroy(): void {
    if (this.user) {
      const userId = this.user.id;
      if (typeof userId === 'number') {
        this.websocketService.disconnectListeners(userId);
      }
    }
    if (this.blockStatusSubscription) {
      this.blockStatusSubscription.unsubscribe();
    }
  }
}