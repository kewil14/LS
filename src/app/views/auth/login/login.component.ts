import { APP_COLORS } from './../../../core/config/app.enums.config';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_LINK } from 'src/app/core/config/app.url.config';
import { Actions, ofType } from '@ngrx/effects';
import { connexion, connexionOk, erreursAuthentification } from 'src/app/core/ngrx/authentification/authentification.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  returnUrl!: string;
  fieldTextType!: boolean;
  AppLinks: typeof APP_LINK = APP_LINK;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private storeService: Store,
    private actionsService: Actions,
    private router: Router) { }

  ngOnDestroy(): void { this.subscriptions.forEach(subscription => subscription.unsubscribe());}

  ngOnInit() {
    this.initFormLogin();

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.actionLogin()
  }

  actionLogin(): void {
    this.subscriptions.push(
      this.actionsService.pipe(ofType(connexionOk)).subscribe(
        () => {
          this.loading = false;
          setTimeout(() => {
            
          }, 100)
          this.router.navigate([this.returnUrl]);
        }
      ),
      this.actionsService.pipe(ofType(erreursAuthentification)).subscribe(
        (data) => {
          data.messages.forEach((message) => {
            console.log(message);
            
          });
          //this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
          this.loading = false;
        }
      )
    )
  }

  initFormLogin(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]
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
      this.storeService.dispatch(connexion({loginDto: this.loginForm.value}));
      this.loading = true;
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}