import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
