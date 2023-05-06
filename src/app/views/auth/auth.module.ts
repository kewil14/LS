import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LockPasswordComponent } from './lock-password/lock-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TranslateModule } from '@ngx-translate/core';
import { UIModule } from 'src/app/shared-module/ui/ui.module';


@NgModule({
  declarations: [
    LoginComponent,
    LockPasswordComponent,
    ResetPasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TranslateModule,
    UIModule
  ]
})
export class AuthModule { }
