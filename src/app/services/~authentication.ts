import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

const ident = "token"

@Injectable()
export class Authentication {
  
  public token:string;

  constructor(private angularAuth: AngularFireAuth) { 
    this.setUp();
  }
  
  getTokenStorage() : string {
    return localStorage.getItem(ident)
  }

  createUserWithEmailAndPassword(email, password){
    return this.angularAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  createUserWithGoogle(){
    
    let provider = new firebase.auth.GoogleAuthProvider();

    return this.angularAuth.auth.signInWithRedirect(provider)
      .then (result => 
      {
        return firebase.auth().getRedirectResult;
      });
  }
 
  logout(){
    return this.angularAuth.auth.signOut().then(()=>{
      this.token=null;
      console.log(this.token)
    })
  }
  setUp(){
    this.angularAuth.authState.subscribe((firebaseUser)=>{
    if(firebaseUser){
      localStorage.setItem(ident, firebaseUser.uid)
      this.token=firebaseUser.uid
      console.log(this.token)

    }else{
      localStorage.removeItem(ident);
      this.token= null;
      console.log(this.token)
    }
    })


    
  }
}