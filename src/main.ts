import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from 'firebase/app';

import { firebaseConf } from './environments/firebaseconfig'  

firebase.initializeApp(firebaseConf);

firebase.auth().getRedirectResult()
.then (result => {
  console.log(result)
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

