import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {  ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList = [];
  constructor(private _user :UserService,private _router : Router) { }

  ngOnInit() {
    this.GetUsers()
  }

  GetUsers(){
    this.userList = this._user.GetUserList();
    //return this.userList;
  }

  RemoveUser(id){
    this._user.RemoveUser(id);
    this.GetUsers()
  }

  AddUser(){
    this._router.navigate(["createuser",''])
  }
  UpdateUser(index){
    this._router.navigate(["createuser",index]);
  }
}
