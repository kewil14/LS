import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentsRoutingModule } from './medicaments-routing.module';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { MedicamentsComponent } from './medicaments.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListProduitsComponent,
    DetailProduitComponent,
    MedicamentsComponent
  ],
  imports: [
    CommonModule,
    MedicamentsRoutingModule,
    SharedModuleModule,
    TranslateModule
  ]
})
export class MedicamentsModule { }
