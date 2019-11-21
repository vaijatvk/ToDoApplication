import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  credentials = [{
    userName : "vaijat",
    passWord : "vaijat"
  },
  {
    userName : "nilesh",
    passWord : "nilesh"
  },
  {
    userName : "admin",
    passWord : "admin"
  }]
  constructor() { }

  checkLogin(userName:string,passWord:string){
    if(this.credentials.find(x=>x.userName==userName && x.passWord==passWord)){
      return true;
    }
    return false;
  }
}
