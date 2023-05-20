import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsommablesComponent } from './consommables/consommables.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { AntecedentsComponent } from './antecedents/antecedents.component';
import { RadiosComponent } from './radios/radios.component';
import { IntrantsComponent } from './intrants/intrants.component';
import { TraitmentsComponent } from './traitments/traitments.component';
import { LaboratoiresComponent } from './laboratoires/laboratoires.component';
import { UserComponent } from './user/user.component';
import { InstitutionComponent } from './institution/institution.component';
import { LoadUserGuard } from '../core/shared/guards/load-user.guard';
import { FaqsComponent } from './setting/faqs/faqs.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'consomables', component: ConsommablesComponent, loadChildren: () => import('./consommables/consommables.module').then(m => m.ConsommablesModule) },
  { path: 'allergies', component: AllergiesComponent, loadChildren: () => import('./allergies/allergies.module').then(m => m.AllergiesModule) },
  { path: 'antecedents', component: AntecedentsComponent, loadChildren: () => import('./antecedents/antecedents.module').then(m => m.AntecedentsModule) },
  { path: 'radios', component: RadiosComponent, loadChildren: () => import('./radios/radios.module').then(m => m.RadiosModule) },
  { path: 'intrants', component: IntrantsComponent, loadChildren: () => import('./intrants/intrants.module').then(m => m.IntrantsModule) },
  { path: 'traitments', component: TraitmentsComponent, loadChildren: () => import('./traitments/traitments.module').then(m => m.TraitmentsModule) },
  { path: 'laboratoires', component: LaboratoiresComponent, loadChildren: () => import('./laboratoires/laboratoires.module').then(m => m.LaboratoiresModule) },
  { path: 'user', component: UserComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [LoadUserGuard] },
  { path: 'institution', component: InstitutionComponent, loadChildren: () => import('./institution/institution.module').then(m => m.InstitutionModule) },
  { path: 'setting', component: FaqsComponent, loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
