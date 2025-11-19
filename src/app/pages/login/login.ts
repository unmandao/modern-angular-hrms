import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  template: `
  <div class="login-container">
      <h1>Login</h1>
      <form>
          <input type="text" name="email" 
                 placeholder="Email"
                 [(ngModel)]="credentials.email">
          <input type="password" name="password"
                 placeholder="Password"
                 [(ngModel)]="credentials.password">
          <button type="submit">Login</button>
      </form>
      <span class="warning" 
            *ngIf="!credentials.email || !credentials.password">
        Please fill in all the required fields
      </span>
  </div>
  `,  
  styleUrl: './login.css',
})
export class Login {

  credentials = { email: '', password: '' };

}
