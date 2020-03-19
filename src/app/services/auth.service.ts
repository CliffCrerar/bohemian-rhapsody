import { Injectable } from '@angular/core';
import { AppLoginForm } from '../models/app-login.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authCredentials: AppLoginForm;
  private _uuid: string;
  constructor() {
    this._uuid = uuidv4();
  }
}
