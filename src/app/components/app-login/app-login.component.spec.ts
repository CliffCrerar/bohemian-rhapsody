import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../../services/http.service';
import { AppLoginComponent } from './app-login.component';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

function runTestBed(callback) {
    TestBed.configureTestingModule({
        declarations: [AppLoginComponent],
        providers: [AuthService, HttpService],
        imports: [FormsModule, HttpClientModule]
    }).compileComponents();
    return callback();
}

describe('AppLoginComponent', () => {
    let component: AppLoginComponent;
    let auth: AuthService;
    let fixture: ComponentFixture<AppLoginComponent>;
    let http: HttpService;
    let usernameInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppLoginComponent],
            providers: [AuthService, HttpService],
            imports: [FormsModule, HttpClientModule]
        })
            .compileComponents();
        auth = TestBed.inject(AuthService);
        http = TestBed.inject(HttpService);
        fixture = TestBed.createComponent(AppLoginComponent);
        component = fixture.componentInstance;
        usernameInput = fixture.nativeElement.querySelector('#username') as HTMLInputElement;
        passwordInput = fixture.nativeElement.querySelector('#password') as HTMLInputElement;

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Heading should be Bohemian Rhapsody', () => {
        expect(component.display.appTitle).toEqual('Bohemian Rhapsody');
    });


    it('Login box heading should be Login', () => {
        expect(component.display.loginBoxHeading).toEqual('Login');
    });

    it('Subtitle should be Music Demo App', () => {
        expect(component.display.subTitle).toEqual('Music Demo App');
    });

    it('Button caption box heading should be Login', () => {
        expect(component.display.btnCaption).toEqual('Login');
    });

    it('User name has placeholder of Username', () => {
        expect(usernameInput.placeholder).toEqual('Username');
    });

    it('Password Input has placeholder of Password', () => {
        expect(passwordInput.placeholder).toEqual('Password');
    });

    it('Auth service should be defined', () => {
        expect(auth).toBeDefined();
    });

    it('Http service should be defined', () => {
        expect(http).toBeDefined();
    });
});


describe('Login to application', () => {
    let fixture: ComponentFixture<AppLoginComponent>;
    let usernameInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;

    const testUserName = 'testuser';
    const testPassword = 'password';

    beforeEach(() => async(() => {
        runTestBed(() => {
            fixture = TestBed.createComponent(AppLoginComponent);
            usernameInput = fixture.nativeElement.querySelector('#username') as HTMLInputElement;
            passwordInput = fixture.nativeElement.querySelector('#password') as HTMLInputElement;
            submitButton = fixture.nativeElement('button');
        });
        usernameInput.value = testUserName;
        passwordInput.value = testPassword;
        submitButton.click();
        fixture.detectChanges();
    }));



    it('Should base encode password', () => {
        const pw = fixture.componentRef.instance.loginForm.password;
        expect(Buffer.from(pw, 'base64').toString('ascii')).toEqual(testPassword);
        expect(pw === testPassword).toBeFalse();
    });




})
