import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginComponent } from './app-login.component';
import { Test } from 'tslint';

describe('AppLoginComponent', () => {
    let component: AppLoginComponent;
    let fixture: ComponentFixture<AppLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppLoginComponent]
        })
            .compileComponents();
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
});
