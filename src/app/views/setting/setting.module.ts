import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SettingRoutingModule } from './setting-routing.module';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [FaqsComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    TabsModule.forRoot(),
  ]
})
export class SettingModule { }
