import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  // to display prefilled data in form
  users={
    name:'Mohit',
    email:'mohit@gmail.com',
    mobile:9999999999
  }
  formSubmit=(val:any)=>{
    // var data=val.controls;
    // console.log(val);
    // console.log(data);
    // console.log('Name:'+data.yourname.value);
    // console.log('Email:'+data.email.value);
    // console.log('Mobile:'+data.mobile.value);

    console.log(val);
  }
}
