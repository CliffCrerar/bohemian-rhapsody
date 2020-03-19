import { Injectable } from '@angular/core';
import { AppLoginForm } from '../models/app-login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _httpPost;

    constructor() { }

    set httpPost(httpPost: any) {
        this._httpPost = httpPost;
    }

    public authenticateUser(credentials: AppLoginForm) {
        credentials.password = btoa(credentials.password);
        return this._httpPost('/api/user-auth', credentials);
    }


}
