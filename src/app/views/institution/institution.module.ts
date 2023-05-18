import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionComponent } from './institution.component';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    InstitutionComponent
  ],
  imports: [
    CommonModule,
    InstitutionRoutingModule,
    DataTablesModule,
    NgApexchartsModule

  ]
})
export class InstitutionModule { }
