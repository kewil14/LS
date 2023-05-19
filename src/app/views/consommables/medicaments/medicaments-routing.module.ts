import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { LoadFormesGuard } from 'src/app/core/shared/guards/medicaments/load-formes.guard';
import { LoadDciGuard } from 'src/app/core/shared/guards/medicaments/load-dci.guard';
import { LoadCategoriesGuard } from 'src/app/core/shared/guards/medicaments/load-categories.guard';
import { LoadFamillesGuard } from 'src/app/core/shared/guards/medicaments/load-familles.guards';
import { LoadProduitsGuard } from 'src/app/core/shared/guards/medicaments/load-produits.guard';

const routes: Routes = [
  { path: 'list', component: ListProduitsComponent, canActivate: [LoadFormesGuard, LoadDciGuard, LoadCategoriesGuard, LoadFamillesGuard, LoadProduitsGuard]},
  { path: 'detail/:idProduit', component: DetailProduitComponent},
  { path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentsRoutingModule { }
