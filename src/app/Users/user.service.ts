import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public userList = [{id:1,name:'asd',email:'asdasd'}];
  constructor() { }

  public AddUser(name:string,email:string){
    if(localStorage.getItem("users") != "")
    this.userList = JSON.parse(localStorage.getItem("users"))
    let id=this.userList.length + 1;
    this.userList.push({id:id,name:name,email:email});
    localStorage.setItem("users",JSON.stringify(this.userList));
  }

  public UpdateUser(index:number,name:string,email:string){
    if(localStorage.getItem("users") != "")
    this.userList = JSON.parse(localStorage.getItem("users"))
    let user = this.userList[index];
    user.name = name;
    user.email = email;
    localStorage.setItem("users",JSON.stringify(this.userList));
  }

  public RemoveUser(index:number){
    if(localStorage.getItem("users") != "")
    this.userList = JSON.parse(localStorage.getItem("users"))
    this.userList.splice(index,1);
    localStorage.setItem("users",JSON.stringify(this.userList));
  }

  public GetUserList(){
    if(localStorage.getItem("users") != "")
    this.userList = JSON.parse(localStorage.getItem("users"))
    return this.userList;
  }

  public GetUser(index){
    if(localStorage.getItem("users") != "")
    this.userList = JSON.parse(localStorage.getItem("users"))
    let user = this.userList[index];
    return user;
  }
}
