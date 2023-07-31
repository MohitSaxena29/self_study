import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  text='Hii Property Binding';
  isTrue=true;
  redText='redText';
  username: string = 'JohnDoe';
  changeDisable=()=>{
    this.isTrue=false;
  }
  website={
    loginTitle: 'Customer Login Panel',
    logo: 'https://fastly.picsum.photos/id/727/200/300.jpg?hmac=YAlAwltwjf1ivXTPLvMU4JLzPsOLmXi9_O1aoYF7hcg'
  }

}
