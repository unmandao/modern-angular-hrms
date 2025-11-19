import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
  <div class="login-container">
      <h1>Login</h1>
      <form>
          <input type="text" name="email" placeholder="Email">
          <input type="password" name="password"
              placeholder="Password">
          <button type="submit">Login</button>
      </form>
  </div>
  `,  
  styleUrl: './login.css',
})
export class Login {

  credentials = { email: '', password: '' };
  
}
