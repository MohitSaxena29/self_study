import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() loginTitle:string | undefined;

}
