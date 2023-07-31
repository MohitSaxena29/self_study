import { Component } from '@angular/core';

@Component({
  selector: 'app-logical-trackby',
  templateUrl: './logical-trackby.component.html',
  styleUrls: ['./logical-trackby.component.css']
})
export class LogicalTrackbyComponent {
  today=Date.now();
  Hiii = 'Hello';
  username='admin';
  isRight=true;
  myEmp=[
    {
      name:"Mohit",
      email:"mm@gmail.com",
      salary:20,
      gender:"Male",
      qualification:["BTech","12"]
    },
    {
      name:"Rohit",
      email:"rm@gmail.com",
      salary:20,
      gender:"Male",
      qualification:["MTech","BTech","12"]
    },
    {
      name:"Sohit",
      email:"sm@gmail.com",
      salary:21,
      gender:"Female",
      qualification:["BSC","12"]
    },
    {
      name:"Lohit",
      email:"lm@gmail.com",
      salary:19,
      gender:"Female",
      qualification:["BBA","12"]
    }
  ]

  loadMoreItems=()=>{
    this.myEmp=[
      {
        name:"Mohit",
        email:"mm@gmail.com",
        salary:20,
        gender:"Male",
        qualification:["BTech","12"]
      },
      {
        name:"Rohit",
        email:"rm@gmail.com",
        salary:20,
        gender:"Male",
        qualification:["MTech","BTech","12"]
      },
      {
        name:"Sohit",
        email:"sm@gmail.com",
        salary:21,
        gender:"Female",
        qualification:["BSC","12"]
      },
      {
        name:"Lohit",
        email:"lm@gmail.com",
        salary:19,
        gender:"Female",
        qualification:["BBA","12"]
      },
      {
        name:"Kiiit",
        email:"kkkkk@gmail.com",
        salary:31,
        gender:"Male",
        qualification:["MBA","BBA","12"]
      },
      {
        name:"lkllt",
        email:"ll@gmail.com",
        salary:19,
        gender:"Female",
        qualification:["BBA","12"]
      }
    ]
  }

  getEmployeesusingTrackBy=(index:number,employee:any)=>{
    return employee.name;
  }
}
