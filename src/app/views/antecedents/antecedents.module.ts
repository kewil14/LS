import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntecedentsRoutingModule } from './antecedents-routing.module';
import { AntecedentsComponent } from './antecedents.component';
import { AntecedentValueComponent } from './antecedent-value/antecedent-value.component';
import { TypeAntecedentComponent } from './type-antecedent/type-antecedent.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataTablesModule } from 'angular-datatables';
import { AntecedentDetailComponent } from './antecedent-value/antecedent-detail/antecedent-detail.component';



@NgModule({
  declarations: [
    AntecedentsComponent,
    AntecedentValueComponent,
    TypeAntecedentComponent,
    AntecedentDetailComponent
  ],
  imports: [
    CommonModule,
    AntecedentsRoutingModule,
    TranslateModule,
    SharedModuleModule,
    DataTablesModule
  ]
})
export class AntecedentsModule { }
