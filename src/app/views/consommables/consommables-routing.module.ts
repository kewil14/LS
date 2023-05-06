import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormesComponent } from './formes/formes.component';
import { LoadFormesGuard } from 'src/app/core/shared/guards/load-formes.guard';
import { FamillesComponent } from './familles/familles.component';
import { LoadCategoriesGuard } from 'src/app/core/shared/guards/load-categories.guard';
import { CategoriesComponent } from './categories/categories.component';
import { LoadFamillesGuard } from 'src/app/core/shared/guards/load-familles.guards';
import { DciComponent } from './dci/dci.component';
import { LoadDciGuard } from 'src/app/core/shared/guards/load-dci.guard';

const routes: Routes = [
  { path: 'medicaments', component: MedicamentsComponent },
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
