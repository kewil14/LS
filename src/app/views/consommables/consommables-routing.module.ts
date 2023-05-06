import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsommablesComponent } from './consommables.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormesComponent } from './formes/formes.component';
import { LoadFormesGuard } from 'src/app/core/shared/guards/load-formes.guard';
import { FamillesComponent } from './familles/familles.component';

const routes: Routes = [
  {
    path: '',
    component: ConsommablesComponent,
    children: [
      { path: 'medicaments', component: MedicamentsComponent },
      { path: 'familles', component: FamillesComponent },
      { path: 'formes', component: FormesComponent, canActivate: [ LoadFormesGuard ] },
      { path: '**', redirectTo: 'medicaments', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommablesRoutingModule { }
