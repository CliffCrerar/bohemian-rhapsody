import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './components/app-login/app-login.component';

const routes: Routes = [
  { path: '/', component: AppLoginComponent,data:{ title: 'Login' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
