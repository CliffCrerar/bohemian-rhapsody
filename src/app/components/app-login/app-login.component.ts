import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppLoginModel, AppLoginForm } from '../../models/app-login.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-app-login',
    templateUrl: './app-login.component.html',
    styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
    /* Attributes */
    private _appTitle = 'Bohemian Rhapsody';
    private _loginBoxHeading = 'Login';
    private _btnCaption = this._loginBoxHeading;
    private _loginLoader = false;
    private _subTitle = 'Music Demo App';
    private _userNameDanger = '';
    private _passwordDanger = '';
    public display: AppLoginModel;
    public loginForm: AppLoginForm;

    /* Constructor */
    constructor(private auth: AuthService) {
        this.loginForm = new AppLoginForm('', '');
        this.display = new AppLoginModel(
            this._appTitle,
            this._loginBoxHeading,
            this._btnCaption,
            this._subTitle,
            this._loginLoader,
            this.loginForm,
            this._userNameDanger,
            this._passwordDanger
        );
    }

    /* Hooks */
    ngOnInit(): void {

    }
    /* Methods */

    setUserNameInvalid(set: boolean) {
        set
            ? this.display.userNameDanger = 'uk-form-danger'
            : this.display.userNameDanger = '';
    }

    setUserPasswordInvalid(set: boolean) {
        set
            ? this.display.passwordDanger = 'uk-form-danger'
            : this.display.passwordDanger = '';
    }

    ngOnSubmit(ev: HTMLElementEventMap): void {
        console.log(ev);
        console.log('this.loginForm: ', this.loginForm);
        this.auth.postCredentials(this.loginForm);
    }

    onInputBlur(input: string) {
        if (
            input === 'username' &&
            this.loginForm.username.length <= 0
        ) {
            this.setUserNameInvalid(true);
        } else if (
            input === 'password' &&
            this.loginForm.password.length <= 4
        ) {
            this.setUserPasswordInvalid(true);
        } else {
            (this.loginForm.password.length <= 4) && this.setUserNameInvalid(true);
            (this.loginForm.username.length <= 0) && this.setUserNameInvalid(true);
        }

    }

    validateForm() {

    }
}
