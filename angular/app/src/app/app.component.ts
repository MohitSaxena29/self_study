import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  display: string = '';
  Hiii = 'Hello';
  text='Hii Property Binding';
  redText='redText';
  isRight=true;
  isTrue=true;
  name='Mohit'
  myArr=["Car","Bike","Cycle","Scooty"];
  today=Date.now();
  myObj=[
    {
      name:"Mohit",
      age:21
    },
    {
      name:"Rohit",
      age:21
    }
  ]

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
  website={
    loginTitle: 'Customer Login Panel',
    logo: 'https://fastly.picsum.photos/id/727/200/300.jpg?hmac=YAlAwltwjf1ivXTPLvMU4JLzPsOLmXi9_O1aoYF7hcg'
  }
  choice='';
  username='admin';
  myEvent = (para: any) => {
    alert(para);
  };
  MyEvent1 = (val: any) => {
    alert(val);
  };
  MyEvent2 = (val: any) => {
    // alert(val);
    this.display=val;
  };

  changeDisable=()=>{
    this.isTrue=false;
  }

  selectEvent=(e:any)=>{
    this.choice=e.target.value;
  }
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
