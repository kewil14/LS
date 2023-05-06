import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsommablesComponent } from './consommables.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormesComponent } from './formes/formes.component';
import { LoadFormesGuard } from 'src/app/core/shared/guards/load-formes.guard';
import { LoadCategoriesGuard } from 'src/app/core/shared/guards/load-categories.guard';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: ConsommablesComponent,
    children: [
      { path: 'medicaments', component: MedicamentsComponent },
      { path: 'formes', component: FormesComponent, canActivate: [ LoadFormesGuard ] },
      { path: 'categories', component: CategoriesComponent, canActivate: [ LoadCategoriesGuard ] },
      { path: '**', redirectTo: 'medicaments', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommablesRoutingModule { }
