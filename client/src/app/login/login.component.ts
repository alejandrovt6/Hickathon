import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {
// }

export class LoginComponent {
  username: string = '';
  password: string = '';
  userType: string = '';
  constructor(private router: Router) {}

  onSubmit() {
    if (this.userType === 'admin') {
      this.router.navigate(['/management']);
    } else {
      this.router.navigate(['/abscences']);
    }
  }
}

 // onSubmit(  ) {
    // this.userType = 'admin';
  //   if (this.userType === 'admin') {
  //     this.router.navigate(['/management']);
  //   } else {
  //     this.router.navigate(['/absences']);
  //   }
  // }

