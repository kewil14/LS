import { LoadAntecedentValuesGuard } from './../../core/shared/guards/antecedent.guards/load-antecedent-values.guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAntecedentComponent } from './type-antecedent/type-antecedent.component';
import { AntecedentValueComponent } from './antecedent-value/antecedent-value.component';
import { LoadTypeAntecedentsGuard } from 'src/app/core/shared/guards/antecedent.guards/load-type-antecedentsguards';

const routes: Routes = [
  { path: 'types', component: TypeAntecedentComponent, canActivate: [LoadTypeAntecedentsGuard]},
  { path: 'values', component: AntecedentValueComponent, canActivate: [LoadAntecedentValuesGuard]},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntecedentsRoutingModule { }
