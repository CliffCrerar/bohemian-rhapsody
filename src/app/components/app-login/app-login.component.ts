import { Component, OnInit } from '@angular/core';
import { AppLoginModel, iAppLoginForm } from '../../models/app-login.model';

@Component({
    selector: 'app-app-login',
    templateUrl: './app-login.component.html',
    styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
    private _appTitle = 'Bohemian Rhapsody';
    private _loginBoxHeading = 'Login';
    private _btnCaption = this._loginBoxHeading;
    private _loginLoader = false;
    private _subTitle = 'Music Demo App';
    public display: AppLoginModel;
    public loginForm: iAppLoginForm;
    constructor() {
        this.loginForm = { username: null, password: null };
        this.display = new AppLoginModel(
            this._appTitle,
            this._loginBoxHeading,
            this._btnCaption,
            this._subTitle,
            this._loginLoader,
            this.loginForm
        );
    }

    ngOnInit(): void {
    }


}
