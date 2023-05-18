import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitmentsRoutingModule } from './traitments-routing.module';
import { TraitmentsComponent } from './traitments.component';
import { TraitmentValueComponent } from './traitment-value/traitment-value.component';
import { TypeTraitmentComponent } from './type-traitment/type-traitment.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataTablesModule } from 'angular-datatables';
import { TraitmentDetailComponent } from './traitment-value/traitment-detail/traitment-detail.component';


@NgModule({
  declarations: [
    TraitmentsComponent,
    TraitmentValueComponent,
    TypeTraitmentComponent,
    TraitmentDetailComponent
  ],
  imports: [
    CommonModule,
    TraitmentsRoutingModule,
    SharedModuleModule,
    TranslateModule,
    DataTablesModule
  ]
})
export class TraitmentsModule { }
