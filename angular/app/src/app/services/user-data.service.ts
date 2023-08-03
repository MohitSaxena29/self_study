import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userAddress:string='';
  constructor( private userService:UserService,private http: HttpClient) { 
    this.userAddress=this.userService.getUserAddress().address;
  }
  
  // getUserData(){
  //   return{
  //     name:"Mohit",
  //     email:"mohit@gmail.com",
  //     mobile:9999999999,
  //     address:this.userAddress
  //   }
  // }

  getUserData(){
    let apiurl='https://jsonplaceholder.typicode.com/users';
    return this.http.get(apiurl);
  }
}
