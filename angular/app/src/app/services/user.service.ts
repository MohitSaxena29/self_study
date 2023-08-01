import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserAddress(){
    return{
      address:"Delhi, India-110009",
    }
  }
}
