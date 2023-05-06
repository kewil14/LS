import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergiesRoutingModule } from './allergies-routing.module';
import { AllergiesComponent } from './allergies.component';
import { AllergieValueComponent } from './allergie-value/allergie-value.component';
import { TypeAllergieComponent } from './type-allergie/type-allergie.component';


@NgModule({
  declarations: [
    AllergiesComponent,
    AllergieValueComponent,
    TypeAllergieComponent
  ],
  imports: [
    CommonModule,
    AllergiesRoutingModule
  ]
})
export class AllergiesModule { }
