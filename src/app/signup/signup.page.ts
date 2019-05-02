import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/~authentication';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  email: string;
  password: string;

  constructor(private auth: Authentication) { }

  createAcc(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
  }
  
  createAccountWithGoogle(){
    this.auth.createUserWithGoogle();
  }


}
