import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isRight=true;
  name='Mohit';
  choice='';
  myArr=["Car","Bike","Cycle","Scooty"];
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
  selectEvent=(e:any)=>{
    this.choice=e.target.value;
  }

}
