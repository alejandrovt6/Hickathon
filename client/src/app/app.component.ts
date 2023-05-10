import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // absences = [];
  title = 'hickathlon'; 
}

export class LoginComponent {
  username: string = '';
  password: string = '';
  userType: string = '';
  constructor(private router: Router) {}

  onSubmit() {
    this.userType = 'admin';

    if (this.userType === 'admin') {
      this.router.navigate(['/management']);
    } else {
      this.router.navigate(['/absences']);
    }
  }
}