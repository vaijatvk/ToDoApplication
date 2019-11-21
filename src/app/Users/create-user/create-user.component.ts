import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm : FormGroup;
  index;
  message;
  type;
  user = {id:null,name:'',email:''};
  constructor(private _user : UserService,private route: ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    this.user = this._user.GetUser(this.index);
    this.userForm = new FormGroup({
      index : new FormControl(),
      userName : new FormControl(),
      email : new FormControl()
    });
    if(this.user != undefined){
      this.userForm.patchValue({
      userName : this.user.name,
      email : this.user.email
    })
    }
    else
    {
      this.user = {id:null,name:'',email:''};
    }
  }

  AddUser(){
    if(!this.userForm.controls.userName.value){
      this.type = 'danger';
      this.message ='Please enter name';
      return;
    }
    if(!this.userForm.controls.email.value){
      this.type = 'danger';
      this.message ='Please enter email';
      return;
    }

    if(!this.index){
      this._user.AddUser(this.userForm.controls.userName.value,this.userForm.controls.email.value);
    }
    else
    {
      this._user.UpdateUser(this.index,this.userForm.controls.userName.value,this.userForm.controls.email.value);
    }

    this._router.navigate(["users"]);
  }

}
