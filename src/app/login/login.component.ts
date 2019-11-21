import { Component, OnInit,NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
userName;
passWord;
public type;
public message;
  constructor(private _route : Router,private _login:LoginService) { 

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName : new FormControl(),
      passWord : new FormControl()
    });
  }

  login(){
    this.userName = this.loginForm.controls.userName.value;
    this.passWord = this.loginForm.controls.passWord.value;
    if(!this.userName){
      this.type = 'danger';
      this.message ='Please enter user name';
    }
    else if(!this.passWord){
      this.type = 'danger';
      this.message ='Please enter password';
    }
    else{
      if(this._login.checkLogin(this.userName,this.passWord)){
        this.type = 'success';
        this.message ='Login Successful.';
        this._route.navigate(["users"]);
      }
      else
      {
        this.type = 'danger';
      this.message ='Please enter valid credentials';
      }
    }
  }

 
}
