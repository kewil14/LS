import { APP_COLORS } from './../../../core/config/app.enums.config';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_LINK } from 'src/app/core/config/app.url.config';
import { Actions, ofType } from '@ngrx/effects';
import { connexion, connexionOk, erreursAuthentification } from 'src/app/core/ngrx/authentification/authentification.actions';
import { APP_ICONS } from 'src/app/core/config/app.enums.config';
import { ListRoles } from 'src/app/core/config/list-roles';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  subscriptions: Subscription[] = [];
  error = '';
  returnUrl!: string;
  fieldTextType!: boolean;
  AppLinks: typeof APP_LINK = APP_LINK;
  messages$ = new BehaviorSubject<{type: {icon: any, color: any}, title: any, message: any, dismissible: boolean}>({type: {icon: APP_ICONS.SUCCESS, color: APP_COLORS.SUCCESS}, title: APP_COLORS.SUCCESS, message: '', dismissible: false})

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private actionService: Actions,
    private storeService: Store) { }

  ngOnInit() {
    this.initFormLogin();

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.actionAuthentication()
  }

  // Authentification action
  actionAuthentication(): void {
    this.subscriptions.push(
      this.actionService.pipe(ofType(erreursAuthentification)).subscribe(({messages}) => {
        this.messages$.next(
          {type: {icon: APP_ICONS.DANGER, color: APP_COLORS.DANGER}, title: APP_COLORS.DANGER, message: messages[0], dismissible: false}
        )
      }),
      this.actionService.pipe(ofType(connexionOk)).subscribe(({typeUser}) =>{
        this.messages$.next(
          {type: {icon: APP_ICONS.SUCCESS, color: APP_COLORS.SUCCESS}, title: APP_COLORS.SUCCESS, message: 'connexion reussi' , dismissible: false}
        );
        setTimeout(() => {
          // conditons de passage
          this.router.navigateByUrl('/dashboard')
        })
      })
    )
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
    this.router.navigateByUrl('/dashboard')
    if (this.loginForm.invalid) {
      return;
    } 
    this.storeService.dispatch(connexion({loginDto: this.loginForm.value}));
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
