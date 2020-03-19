import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppLandingComponent } from './components/app-landing/app-landing.component';
import { AppAlertComponent } from './components/_generic/app-alert/app-alert.component';
import { MLBackgroundCreditComponent } from './components/_static/image-credit';

@NgModule({
    declarations: [
        AppComponent,
        AppLoginComponent,
        AppLandingComponent,
        AppAlertComponent,
        MLBackgroundCreditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
