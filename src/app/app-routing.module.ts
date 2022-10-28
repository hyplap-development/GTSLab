import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminPanel/admin/admin.component';
import { AuthComponent } from './adminPanel/auth/auth.component';

const routes: Routes = [

  // auth routing path
  { path: 'auth', loadChildren: () => import('./adminPanel/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'login',
    title: 'Login',
    component: AuthComponent,
    loadChildren: () => import('./adminPanel/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forgetpassword',
    title: 'Forget Password',
    component: AuthComponent,
    loadChildren: () => import('./adminPanel/auth/forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordModule)
  },

  // admin routing path

  { path: 'admin', loadChildren: () => import('./adminPanel/admin/admin.module').then(m => m.AdminModule) },

  { 
    path: 'dashboard',
    title: 'Dashboard',
    component: AdminComponent, 
    loadChildren: () => import('./adminPanel/admin/dashboard/dashboard.module').then(m => m.DashboardModule) 
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
