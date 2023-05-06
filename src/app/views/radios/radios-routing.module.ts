import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRadioComponent } from './type-radio/type-radio.component';
import { RadioValueComponent } from './radio-value/radio-value.component';

const routes: Routes = [
  { path: 'types', component: TypeRadioComponent},
  { path: 'values', component: RadioValueComponent},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadiosRoutingModule { }
