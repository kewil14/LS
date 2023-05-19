import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntrantsRoutingModule } from './intrants-routing.module';
import { IntrantsComponent } from './intrants.component';
import { IntrantValueComponent } from './intrant-value/intrant-value.component';
import { TypeIntrantComponent } from './type-intrant/type-intrant.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { IntrantDetailComponent } from './intrant-value/intrant-detail/intrant-detail.component';
import { UIModule } from 'src/app/shared-module/ui/ui.module';


@NgModule({
  declarations: [
    IntrantsComponent,
    IntrantValueComponent,
    TypeIntrantComponent,
    IntrantDetailComponent
  ],
  imports: [
    CommonModule,
    IntrantsRoutingModule,
    SharedModuleModule,
    TranslateModule,
    DataTablesModule,
    UIModule
  ]
})
export class IntrantsModule { }
