import { Component } from '@angular/core';
import { Authentication } from '../services/~authentication';
import { Uploader } from '../services/~uploader';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  files:any;

  constructor(private auth:Authentication, private upload: Uploader) { }

  filechange(ev){
    console.log(ev.target.files);
    this.files = ev.target.files;
  }
  submit(){
    if(this.files.length <= 0) return;
    this.upload.uploadMultiple(this.files);
  }
}
