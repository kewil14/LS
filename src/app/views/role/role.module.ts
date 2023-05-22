import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { ListRoleComponent } from './list-role/list-role.component';
import { RoleComponent } from './role.component';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { CreateRoleComponent } from './create-role/create-role.component';


@NgModule({
  declarations: [
    ListRoleComponent,
    RoleComponent,
    CreateRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    TranslateModule,
    DataTablesModule,
    NgbTooltipModule,
    SharedModuleModule
  ]
})
export class RoleModule { }
