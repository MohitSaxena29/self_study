import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  // users={
  //   name:'Mohit',
  //   email:'mohit@gmail.com',
  //   mobile:9999999999
  // }



  // With Form Builder
  contactForm: FormGroup;
  constructor(private fb:FormBuilder){
  this.contactForm= fb.group({
    yourname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',Validators.required)
  })
}




// With formGroup

// contactForm= new FormGroup({
//   yourname: new FormControl(''),
//   email: new FormControl(''),
//   mobile: new FormControl('')
// })

postData(){
  var name=this.contactForm.get('yourname')?.value;
  var email=this.contactForm.get('email')?.value;
  var mobile=this.contactForm.get('mobile')?.value;
  console.log(name+' '+email+' '+mobile);
}

setData(){
  this.contactForm.setValue({
    "yourname":'Mohit',
    "email":"mohit@gmail.com",
    "mobile":9999999999
    
  })
}

// setData(){
//   this.contactForm.patchValue({
//     "yourname":'Mohit',
//     "email":"mohit@gmail.com",

//   })
// }

resetData(){
  this.contactForm.reset();
}
}
