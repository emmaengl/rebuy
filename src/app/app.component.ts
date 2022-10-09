import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rebuy';

  loggedIn = false;

  // need to build actual login functionality, users would be directed to a form to enter details
  toggleLogin() { this.loggedIn = !this.loggedIn; }
}
