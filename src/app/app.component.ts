import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBNlX35KuYnyFiRnElDfUZRsANkThWxe38",
      authDomain: "blog-angular-openclassroom.firebaseapp.com",
      databaseURL: "https://blog-angular-openclassroom.firebaseio.com",
      projectId: "blog-angular-openclassroom",
      storageBucket: "blog-angular-openclassroom.appspot.com",
      messagingSenderId: "139163057081"
    };
    firebase.initializeApp(config);
  }
}
