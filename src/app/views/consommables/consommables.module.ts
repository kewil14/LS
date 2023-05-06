import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommablesRoutingModule } from './consommables-routing.module';
import { ConsommablesComponent } from './consommables.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormesComponent } from './formes/formes.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ConsommablesComponent,
    MedicamentsComponent,
    FormesComponent
  ],
  imports: [
    CommonModule,
    ConsommablesRoutingModule,
    SharedModuleModule,
    TranslateModule
  ]
})
export class ConsommablesModule { }
