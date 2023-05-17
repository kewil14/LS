import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRadioComponent } from './type-radio/type-radio.component';
import { RadioValueComponent } from './radio-value/radio-value.component';
import { LoadRadioValueGuard } from 'src/app/core/shared/guards/radios/load-radio-value.guard';
import { LoadTypeRadioGuard } from 'src/app/core/shared/guards/radios/load-type-radio.guard';

const routes: Routes = [
  { path: 'types', component: TypeRadioComponent, canActivate: [LoadTypeRadioGuard]},
  { path: 'values', component: RadioValueComponent, canActivate: [LoadRadioValueGuard, LoadTypeRadioGuard]},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadiosRoutingModule { }
