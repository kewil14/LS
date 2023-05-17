import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommablesRoutingModule } from './consommables-routing.module';
import { ConsommablesComponent } from './consommables.component';
import { FormesComponent } from './formes/formes.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';
import { FamillesComponent } from './familles/familles.component';
import { DciComponent } from './dci/dci.component';
import { CategoriesComponent } from './categories/categories.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ConsommablesComponent,
    FormesComponent,
    FamillesComponent,
    DciComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ConsommablesRoutingModule,
    SharedModuleModule,
    TranslateModule,
    DataTablesModule
  ]
})
export class ConsommablesModule { }
