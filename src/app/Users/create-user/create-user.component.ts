import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
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
  constructor(private _user : UserService,private route: ActivatedRoute,private _router:Router,private formBuilder : FormBuilder) { 
    this.index = this.route.snapshot.paramMap.get('index');
    this.user = this._user.GetUser(this.index);
    this.userForm = this.formBuilder.group({
      userName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]]
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

  ngOnInit() {
    
  }

  AddUser(){
    if(this.userForm.controls.userName.errors){
      this.type = 'danger';
      this.message ='Please enter name';
      return;
    }
    else if(this.userForm.controls.email.errors){
      if (this.userForm.controls.email.errors.required){
      this.type = 'danger';
      this.message ='Please enter email';
      return;
      }
      else if(this.userForm.controls.email.errors){
        if (this.userForm.controls.email.errors.email){
          this.type = 'danger';
          this.message ='Please enter Valid Email Address';
        }
        return;
      }
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
