import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../types/auth-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  loginUser() {
    const user: User = {
      username: this.username,
      password: this.password,
    };
    this.authService
      .login('https://fakestoreapi.com/auth/login', user)
      .subscribe({
        next: (data) => {
          if (data.token) {
            sessionStorage.setItem('auth_token', data.token);
            console.info('Token stored in session storage.');
          } else {
            console.error('No token received in response.');
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
