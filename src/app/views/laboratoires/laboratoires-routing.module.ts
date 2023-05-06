import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeLaboratoireComponent } from './type-laboratoire/type-laboratoire.component';
import { LaboratoireValueComponent } from './laboratoire-value/laboratoire-value.component';

const routes: Routes = [
  { path: 'types', component: TypeLaboratoireComponent},
  { path: 'values', component: LaboratoireValueComponent},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoiresRoutingModule { }
