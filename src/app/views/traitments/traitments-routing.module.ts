import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeTraitmentComponent } from './type-traitment/type-traitment.component';
import { TraitmentValueComponent } from './traitment-value/traitment-value.component';

const routes: Routes = [
  { path: 'types', component: TypeTraitmentComponent},
  { path: 'values', component: TraitmentValueComponent},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitmentsRoutingModule { }
