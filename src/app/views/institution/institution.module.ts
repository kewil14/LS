import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionComponent } from './institution.component';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HopiComponent } from './type/hopi/hopi.component';


@NgModule({
  declarations: [
    InstitutionComponent,
    HopiComponent,
  ],
  imports: [
    CommonModule,
    InstitutionRoutingModule,
    DataTablesModule,
    NgApexchartsModule,
    TranslateModule,
    SharedModuleModule

  ]
})
export class InstitutionModule { }
