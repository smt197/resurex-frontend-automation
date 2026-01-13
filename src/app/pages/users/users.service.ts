import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { UserCreateUpdateModel } from 'src/app/interfaces/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root', // The service is provided in the root injector (app-wide singleton)
})
export class UsersService {
  private apiUrl = environment.apiUrl; // Base API URL from environment configuration

  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of users from the server.
   * @returns An Observable containing the response from the server.
   */
  getUsers(page: number): Observable<ResponseGlobalServer> {
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/users?page=`+page);
  }

  /**
   * Fetches a single user by their ID.
   * @param userId - The ID of the user to retrieve.
   * @returns An Observable containing the response from the server.
   */
  getUserById(userId: number): Observable<ResponseGlobalServer> {
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/users/${userId}`);
  }

  /**
   * Creates a new user on the server.
   * @param userData - The data for the new user.
   * @returns An Observable containing the response from the server.
   */
  createUser(userData: FormData): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(`${this.apiUrl}/users`, userData);
  }

  /**
   * Updates an existing user on the server.
   * @param userId - The ID of the user to update.
   * @param userData - The updated data for the user.
   * @returns An Observable containing the response from the server.
   */
  updateUser(slug: string, userData: FormData): Observable<ResponseGlobalServer> {
    userData.append('_method', 'PUT');
    
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/users/${slug}`, 
      userData
    );
  }

  /**
   * Deletes a user from the server.
   * @param userId - The ID of the user to delete.
   * @returns An Observable containing the response from the server.
   */
  deleteUser(slug: string): Observable<ResponseGlobalServer> {
    return this.http.delete<ResponseGlobalServer>(`${this.apiUrl}/users/${slug}`);
  }

  /**
   * Deletes a user from the server.
   * @param userId - The ID of the user to delete.
   * @returns An Observable containing the response from the server.
   */
  deleteAllUser(slugs: string[]): Observable<ResponseGlobalServer> {
    return this.http.delete<ResponseGlobalServer>(`${this.apiUrl}/users/batch/`,{
      body: {
        resources: slugs // Ensure this matches the backend expectation
      }});
  }

    /**
   * Creates a new user on the server.
   * @param userData - The data for the new user.
   * @returns An Observable containing the response from the server.
   */
    searchUsers(searchTerm: string): Observable<ResponseGlobalServer> {
        const payload = {
          search: {
              value: searchTerm.trim(), // Trim whitespace from the search term
          },
      };
  
      // Send the POST request
      return this.http.post<ResponseGlobalServer>(`${this.apiUrl}/users/search`, payload);
  }
  
}