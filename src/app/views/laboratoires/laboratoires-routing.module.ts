import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeLaboratoireComponent } from './type-laboratoire/type-laboratoire.component';
import { LaboratoireValueComponent } from './laboratoire-value/laboratoire-value.component';
import { LoadTypeLaboratoireGuard } from 'src/app/core/shared/guards/laboratoires/load-type-laboratoire.guard';
import { LoadLaboratoireValueGuard } from 'src/app/core/shared/guards/laboratoires/load-laboratoire-value.guard';

const routes: Routes = [
  { path: 'types', component: TypeLaboratoireComponent, canActivate: [LoadTypeLaboratoireGuard]},
  { path: 'values', component: LaboratoireValueComponent, canActivate: [LoadTypeLaboratoireGuard, LoadLaboratoireValueGuard]},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoiresRoutingModule { }
