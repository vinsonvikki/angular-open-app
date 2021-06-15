import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-open-app';
  welcome = "Angular Open Application"
  counter = 0;
  nameInput = "";

  incrementHandler(){
    this.counter +=1;
  }
}
