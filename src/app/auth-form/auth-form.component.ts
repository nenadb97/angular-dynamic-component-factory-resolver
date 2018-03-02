import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'auth-form',
  styleUrls: ['./auth-form.component.css'],
  template: `
    <form class="example-form">
      <h3>{{ title }}</h3>
      <mat-form-field class="example-full-width">
        <input type="email" matInput placeholder="E-mail">
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <input type="password" matInput placeholder="Password">
      </mat-form-field>
      <button type="submit" mat-raised-button color="accent">{{buttonText}}</button>
    </form>
  `
})
export class AuthFormComponent implements OnInit {
  title = 'Login Form';
  buttonText = 'Signin';

  constructor() {
  }

  ngOnInit() {
  }

}
