import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiosRoutingModule } from './radios-routing.module';
import { RadiosComponent } from './radios.component';
import { RadioValueComponent } from './radio-value/radio-value.component';
import { TypeRadioComponent } from './type-radio/type-radio.component';


@NgModule({
  declarations: [
    RadiosComponent,
    RadioValueComponent,
    TypeRadioComponent
  ],
  imports: [
    CommonModule,
    RadiosRoutingModule
  ]
})
export class RadiosModule { }
