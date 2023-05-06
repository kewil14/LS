import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsommablesComponent } from './consommables/consommables.component';
import { AllergiesComponent } from './allergies/allergies.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consomables', component: ConsommablesComponent, loadChildren: () => import('./consommables/consommables.module').then(m => m.ConsommablesModule) },
  { path: 'allergies', component: AllergiesComponent, loadChildren: () => import('./allergies/allergies.module').then(m => m.AllergiesModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
