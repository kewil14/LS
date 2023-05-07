import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergiesRoutingModule } from './allergies-routing.module';
import { AllergiesComponent } from './allergies.component';
import { AllergieValueComponent } from './allergie-value/allergie-value.component';
import { TypeAllergieComponent } from './type-allergie/type-allergie.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AllergiesComponent,
    AllergieValueComponent,
    TypeAllergieComponent
  ],
  imports: [
    CommonModule,
    AllergiesRoutingModule,
    TranslateModule,
    SharedModuleModule
  ]
})
export class AllergiesModule { }
