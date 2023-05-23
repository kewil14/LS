import { AuthentificationState } from './../../../core/ngrx/authentification/authentification.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { APP_LINK } from 'src/app/core/config/app.url.config';
import { selectAuthentificationState } from 'src/app/core/core.state';
import { erreursAuthentification, resetPassword, resetPasswordOk } from 'src/app/core/ngrx/authentification/authentification.actions';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  suscriptions: Subscription[] = [];
  loadind$ = new BehaviorSubject<boolean>(false);
  authentificationState$!: Observable<AuthentificationState>;
  AppLinks: typeof APP_LINK = APP_LINK;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storeService: Store,
    private actionService: Actions) { }

  ngOnDestroy(): void {
    this.suscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit() {
    this.initFormLogin();
    this.authentificationState$ = this.storeService.select(selectAuthentificationState).pipe()
  }

  initFormLogin(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]
    })
  }
   // convenience getter for easy access to form fields
   get login() { return this.loginForm.controls; }

   actionSendingMail(){
    this.suscriptions.push(
      this.actionService.pipe(ofType(resetPasswordOk)).subscribe(() => {
        this.loadind$.next(false);
        setTimeout(() => {
          this.router.navigateByUrl('')
        }, 3000)
      }),
      this.actionService.pipe(ofType(erreursAuthentification)).subscribe(({messages}) => {
        this.loadind$.next(false),
        'messages'
      })
    )
   }

  /**
   * Form submit
   */
  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.loadind$.next(true)
    this.storeService.dispatch(resetPassword({loginDto: this.loginForm.value}));
      
    
  }
}
