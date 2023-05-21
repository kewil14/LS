import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { ListRoleComponent } from './list-role/list-role.component';
import { RoleComponent } from './role.component';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListRoleComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    TranslateModule,
    DataTablesModule,
    NgbTooltipModule
  ]
})
export class RoleModule { }
