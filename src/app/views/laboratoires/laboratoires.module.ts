import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoiresRoutingModule } from './laboratoires-routing.module';
import { LaboratoiresComponent } from './laboratoires.component';
import { LaboratoireValueComponent } from './laboratoire-value/laboratoire-value.component';
import { TypeLaboratoireComponent } from './type-laboratoire/type-laboratoire.component';


@NgModule({
  declarations: [
    LaboratoiresComponent,
    LaboratoireValueComponent,
    TypeLaboratoireComponent
  ],
  imports: [
    CommonModule,
    LaboratoiresRoutingModule
  ]
})
export class LaboratoiresModule { }
