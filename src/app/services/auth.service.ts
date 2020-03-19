import { Injectable } from '@angular/core';
import { AppLoginForm } from '../models/app-login.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpService) { }

    public authenticateUser(credentials: AppLoginForm) {
        credentials.password = btoa(credentials.password);
        credentials.password = null;
    }

    postCredentials(credentials: AppLoginForm) {
        this.http.post('/users', credentials).subscribe(res => console.log(res))
    }

}
