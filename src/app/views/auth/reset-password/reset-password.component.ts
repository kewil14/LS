import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_LINK } from 'src/app/core/config/app.url.config';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  AppLinks: typeof APP_LINK = APP_LINK;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initFormLogin();
  }

  initFormLogin(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]
    })
  }
   // convenience getter for easy access to form fields
   get login() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      
    }
  }
}
