import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiosRoutingModule } from './radios-routing.module';
import { RadiosComponent } from './radios.component';
import { RadioValueComponent } from './radio-value/radio-value.component';
import { TypeRadioComponent } from './type-radio/type-radio.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    RadiosComponent,
    RadioValueComponent,
    TypeRadioComponent

  ],
  imports: [
    CommonModule,
    RadiosRoutingModule,
    TranslateModule,
    SharedModuleModule
  ]
})
export class RadiosModule { }
