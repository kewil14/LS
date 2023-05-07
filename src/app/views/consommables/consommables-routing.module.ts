import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormesComponent } from './formes/formes.component';
import { LoadFormesGuard } from 'src/app/core/shared/guards/medicaments/load-formes.guard';
import { FamillesComponent } from './familles/familles.component';
import { LoadCategoriesGuard } from 'src/app/core/shared/guards/medicaments/load-categories.guard';
import { CategoriesComponent } from './categories/categories.component';
import { LoadFamillesGuard } from 'src/app/core/shared/guards/medicaments/load-familles.guards';
import { DciComponent } from './dci/dci.component';
import { LoadDciGuard } from 'src/app/core/shared/guards/medicaments/load-dci.guard';

const routes: Routes = [
  { path: 'medicaments', component: MedicamentsComponent, loadChildren: () => import('./medicaments/medicaments.module').then(m => m.MedicamentsModule) },
  { path: 'familles', component: FamillesComponent, canActivate: [LoadFamillesGuard] },
  { path: 'formes', component: FormesComponent, canActivate: [ LoadFormesGuard ] },
  { path: 'categories', component: CategoriesComponent, canActivate: [ LoadCategoriesGuard ] },
  { path: 'dci', component: DciComponent, canActivate: [ LoadDciGuard ] },
  { path: '**', redirectTo: 'medicaments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommablesRoutingModule { }
