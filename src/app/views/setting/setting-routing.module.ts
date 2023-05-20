import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
