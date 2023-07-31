import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  Hiii = 'Hello';
  display: string = '';
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
}
