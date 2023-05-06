import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsommablesComponent } from './consommables/consommables.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { AntecedentsComponent } from './antecedents/antecedents.component';
import { RadiosComponent } from './radios/radios.component';
import { IntrantsComponent } from './intrants/intrants.component';
import { TraitmentsComponent } from './traitments/traitments.component';
import { LaboratoiresComponent } from './laboratoires/laboratoires.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consomables', component: ConsommablesComponent, loadChildren: () => import('./consommables/consommables.module').then(m => m.ConsommablesModule) },
  { path: 'allergies', component: AllergiesComponent, loadChildren: () => import('./allergies/allergies.module').then(m => m.AllergiesModule) },
  { path: 'antecedents', component: AntecedentsComponent, loadChildren: () => import('./antecedents/antecedents.module').then(m => m.AntecedentsModule) },
  { path: 'radios', component: RadiosComponent, loadChildren: () => import('./radios/radios.module').then(m => m.RadiosModule) },
  { path: 'intrants', component: IntrantsComponent, loadChildren: () => import('./intrants/intrants.module').then(m => m.IntrantsModule) },
  { path: 'traitments', component: TraitmentsComponent, loadChildren: () => import('./traitments/traitments.module').then(m => m.TraitmentsModule) },
  { path: 'laboratoires', component: LaboratoiresComponent, loadChildren: () => import('./laboratoires/laboratoires.module').then(m => m.LaboratoiresModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
