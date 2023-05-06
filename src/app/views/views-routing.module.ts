import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsommablesComponent } from './consommables/consommables.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consomables', component: ConsommablesComponent, loadChildren: () => import('./consommables/consommables.module').then(m => m.ConsommablesModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
