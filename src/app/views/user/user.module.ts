import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TranslateModule } from '@ngx-translate/core';
import { UIModule } from 'src/app/shared-module/ui/ui.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    TranslateModule,
    UIModule
  ]
})
export class UserModule { }
