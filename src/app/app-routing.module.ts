import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { CreateUserComponent } from './Users/create-user/create-user.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"users",component:UserListComponent
  },
  {
    path:"createuser/:index",component:CreateUserComponent
  },
  {
    path:"createuser",component:CreateUserComponent
  },
  {
    path:"",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
