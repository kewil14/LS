import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitmentsRoutingModule } from './traitments-routing.module';
import { TraitmentsComponent } from './traitments.component';
import { TraitmentValueComponent } from './traitment-value/traitment-value.component';
import { TypeTraitmentComponent } from './type-traitment/type-traitment.component';


@NgModule({
  declarations: [
    TraitmentsComponent,
    TraitmentValueComponent,
    TypeTraitmentComponent
  ],
  imports: [
    CommonModule,
    TraitmentsRoutingModule
  ]
})
export class TraitmentsModule { }
