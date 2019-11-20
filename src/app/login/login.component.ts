import { Component, OnInit,NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
  constructor(private _route : Router) { 

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName : new FormControl(),
      passWord : new FormControl()
    });
  }

  login(){
    if(!this.loginForm.controls.userName.value){
      alert('please')
    }
    else if(!this.loginForm.controls.passWord.value){
      alert('please 2')
    }
    else{
      this._route.navigate(["login"]);
    }
  }
}
