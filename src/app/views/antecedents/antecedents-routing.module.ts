import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAntecedentComponent } from './type-antecedent/type-antecedent.component';
import { AntecedentValueComponent } from './antecedent-value/antecedent-value.component';

const routes: Routes = [
  { path: 'types', component: TypeAntecedentComponent},
  { path: 'values', component: AntecedentValueComponent},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntecedentsRoutingModule { }
