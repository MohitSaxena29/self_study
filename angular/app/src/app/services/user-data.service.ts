import { Injectable } from '@angular/core';
import {UserService} from './user.service'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userAddress:string='';
  constructor( private userService:UserService) { 
    this.userAddress=this.userService.getUserAddress().address;
  }
  
  getUserData(){
    return{
      name:"Mohit",
      email:"mohit@gmail.com",
      mobile:9999999999,
      address:this.userAddress
    }
  }
}
