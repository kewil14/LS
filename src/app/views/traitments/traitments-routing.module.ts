import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeTraitmentComponent } from './type-traitment/type-traitment.component';
import { TraitmentValueComponent } from './traitment-value/traitment-value.component';
import { LoadTypeTraitmentGuard } from 'src/app/core/shared/guards/traitements/load-type-traitment.guard';
import { LoadTraitmentValueGuard } from 'src/app/core/shared/guards/traitements/load-traitment-value.guard';

const routes: Routes = [
  { path: 'types', component: TypeTraitmentComponent, canActivate: [LoadTypeTraitmentGuard]},
  { path: 'values', component: TraitmentValueComponent, canActivate: [LoadTraitmentValueGuard]},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitmentsRoutingModule { }
