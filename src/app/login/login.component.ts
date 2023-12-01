import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  viewNewAccount: boolean = false;
  viewLogin: boolean = true;

  changeForm1(){
    this.viewNewAccount = true;
     this.viewLogin = false;
  }
  changeForm2(){
    this.viewNewAccount = false;
    this.viewLogin = true;
  }
}
