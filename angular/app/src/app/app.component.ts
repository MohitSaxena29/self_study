import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'
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
  constructor(private userdataService:UserDataService){
    let userData=this.userdataService.getUserData();
    console.log(userData);
    this.name=userData.name;
    this.address=userData.address;
    }
}
