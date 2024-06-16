import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Datos falsos para la autenticación
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigateByUrl('/admin');
    } else if (this.username === 'user' && this.password === 'user') {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid credentials');
    }
  }
}
