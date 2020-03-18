import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppLandingComponent } from './components/app-landing/app-landing.component'

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
