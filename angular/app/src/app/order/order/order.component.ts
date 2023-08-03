import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  ngOnInit():void{
    // localStorage.removeItem('username');
    // localStorage.clear();
    console.log(localStorage.getItem('username'));
    console.log(sessionStorage.getItem('sessionuser'));
    // console.log(localStorage.getItem('userData'));
    const userDataString = localStorage.getItem('userData');
    if (userDataString !== null) {
      const getUserData = JSON.parse(userDataString);
      console.log(getUserData);
      console.log(getUserData.name);
    }
  }
}
