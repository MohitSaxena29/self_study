import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service';
import {Observable} from 'rxjs';
import {Employee} from './interface/EmployeInterface'
import {Address} from './interface/EmpAddress';

// to combine 2 interface together

interface CombinedInterface extends Employee,Address{}

interface Order{
  TotalPrice(price:number,quantity:number):number
}

interface Customer{
  [index:number]:string
}

let customerArray:Customer=["Mohit","hiiii"];
console.log(customerArray[1]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'app';
  redText='redText';
  name: string = "";
  email: string = "";
  mobile: string = '';
  address: string = '';
  website={
    loginTitle: 'Customer Login Panel',
    logo: 'https://fastly.picsum.photos/id/727/200/300.jpg?hmac=YAlAwltwjf1ivXTPLvMU4JLzPsOLmXi9_O1aoYF7hcg'
  }
  // userData:any=[];

  userData$:Observable<any>;
  constructor(private userdataService:UserDataService){
    // let userData=this.userdataService.getUserData();
    // console.log(userData);
    // this.name=userData.name;
    // this.address=userData.address;



    // this.userdataService.getUserData().subscribe(data=>{
    //   this.userData=data;
    //   console.log(data);
    // })


    let userRecord=this.userdataService.getUserData();
    this.userData$=userRecord;
    }


    // interface
    getData(){
    //   let companyName:Employee={
    //     username:'Mohit',
    //     age:21,
    //     email:'mo@gmail.com',
    //     phone:9999999999 

    //   }
    //   return companyName;
    // }

    let companyName:CombinedInterface={
      username:'Mohit',
      age:21,
      email:'mo@gmail.com',
      phone:9999999999,
      street:"Delhi",
      city:"Delhi",
      pincode:110009

    }
    return companyName;
  }

  calculateTotal:Order={
    TotalPrice(price:number,quantity:number){
        let TotalPrice=price*quantity;
        return TotalPrice;
    }
  }

  
}
