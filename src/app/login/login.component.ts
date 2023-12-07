import { Component } from '@angular/core';
import { login } from '../interfaces/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  viewNewAccount: boolean = false;
  viewLogin: boolean = true;

  Login: login = {
    user_name: '',
    password: ''
  }


  changeForm1(){
    this.viewNewAccount = true;
     this.viewLogin = false;
  }
  changeForm2(){
    this.viewNewAccount = false;
    this.viewLogin = true;
  }

  submitLogin(){
    console.log(this.Login)
  }
}
