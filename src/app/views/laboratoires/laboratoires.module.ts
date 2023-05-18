import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoiresRoutingModule } from './laboratoires-routing.module';
import { LaboratoiresComponent } from './laboratoires.component';
import { LaboratoireValueComponent } from './laboratoire-value/laboratoire-value.component';
import { TypeLaboratoireComponent } from './type-laboratoire/type-laboratoire.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataTablesModule } from 'angular-datatables';
import { LaboratoireDetailComponent } from './laboratoire-value/laboratoire-detail/laboratoire-detail.component';


@NgModule({
  declarations: [
    LaboratoiresComponent,
    LaboratoireValueComponent,
    TypeLaboratoireComponent,
    LaboratoireDetailComponent
  ],
  imports: [
    CommonModule,
    LaboratoiresRoutingModule,
    TranslateModule,
    SharedModuleModule,
    DataTablesModule
  ]
})
export class LaboratoiresModule { }
