import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntecedentsRoutingModule } from './antecedents-routing.module';
import { AntecedentsComponent } from './antecedents.component';
import { AntecedentValueComponent } from './antecedent-value/antecedent-value.component';
import { TypeAntecedentComponent } from './type-antecedent/type-antecedent.component';


@NgModule({
  declarations: [
    AntecedentsComponent,
    AntecedentValueComponent,
    TypeAntecedentComponent
  ],
  imports: [
    CommonModule,
    AntecedentsRoutingModule
  ]
})
export class AntecedentsModule { }
