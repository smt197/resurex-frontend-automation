import { EventEmitter } from '@angular/core';
import { User } from '../interfaces/User';
import { ResponseGlobalServer } from '../interfaces/Response-globalServer';
import { Setting } from '../interfaces/setting';
import { Menu } from '../interfaces/Menu';

export class Auth {

  public static isLoggedIn = new EventEmitter<boolean>();
  static userEmitter = new EventEmitter<User>();
  public static responseServerEmitter = new EventEmitter<ResponseGlobalServer>();
  public static responseServerSettings = new EventEmitter<Setting>();
  public static menusEmitter = new EventEmitter<Menu[]>();

  public static user: User | null = null;
  public static response: ResponseGlobalServer | null = null;
  public static loginStatus: boolean = false;
  public static setting: Setting | null = null;

  static getuserInfos() {
    return this.userEmitter;
  }
}
