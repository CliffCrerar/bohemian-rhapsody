import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../../services/http.service';
import { AppLoginComponent } from './app-login.component';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



describe('AppLoginComponent', () => {
    let component: AppLoginComponent;
    let auth: AuthService;
    let fixture: ComponentFixture<AppLoginComponent>;
    let http: HttpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppLoginComponent],
            providers: [AuthService, HttpService],
            imports: [FormsModule, HttpClientModule]
        })
            .compileComponents();
        auth = TestBed.inject(AuthService);
        http = TestBed.inject(HttpService);

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

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
        const input = fixture.nativeElement.querySelector('#username') as HTMLInputElement;
        expect(input.placeholder).toEqual('Username');
    });

    it('Password Input has placeholder of Password', () => {
        const input = fixture.nativeElement.querySelector('#password') as HTMLInputElement;
        expect(input.placeholder).toEqual('Password');
    });

    it('Auth service should be defined', () => {
        expect(auth).toBeDefined();
    });

    it('Http service should be defined', () => {
        expect(http).toBeDefined();
    });

});
