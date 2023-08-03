import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  ngOnInit():void{
    let userObj={
      name:'Mohit',
      age:21,
      email:'mm@gmail.com'
    }
    localStorage.setItem('username','Mohit');
    localStorage.setItem('userData',JSON.stringify(userObj));
    sessionStorage.setItem('sessionuser','Mohit Saxena');
    console.log(localStorage.getItem('username'));
    console.log(sessionStorage.getItem('sessionuser'));
    console.log(localStorage.getItem('userData'));
  }
}
