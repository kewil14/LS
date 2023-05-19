import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergiesRoutingModule } from './allergies-routing.module';
import { AllergiesComponent } from './allergies.component';
import { AllergieValueComponent } from './allergie-value/allergie-value.component';
import { TypeAllergieComponent } from './type-allergie/type-allergie.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataTablesModule } from 'angular-datatables';
import { AllergieDetailComponent } from './allergie-value/allergie-detail/allergie-detail.component';
import { UIModule } from 'src/app/shared-module/ui/ui.module';

@NgModule({
  declarations: [
    AllergiesComponent,
    AllergieValueComponent,
    TypeAllergieComponent,
    AllergieDetailComponent
  ],
  imports: [
    CommonModule,
    AllergiesRoutingModule,
    TranslateModule,
    SharedModuleModule,
    DataTablesModule,
    UIModule
  ]
})
export class AllergiesModule { }
