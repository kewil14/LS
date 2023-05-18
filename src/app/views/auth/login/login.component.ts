import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_LINK } from 'src/app/core/config/app.url.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  returnUrl!: string;
  fieldTextType!: boolean;
  AppLinks: typeof APP_LINK = APP_LINK;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initFormLogin();

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initFormLogin(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(50)])]
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

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
