import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    ForgetPasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
