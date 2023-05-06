import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAllergieComponent } from './type-allergie/type-allergie.component';
import { AllergieValueComponent } from './allergie-value/allergie-value.component';
import { LoadAllergieTypeGuard } from 'src/app/core/shared/guards/load-allergie-type.guard';

const routes: Routes = [
  { path: 'types', component: TypeAllergieComponent, canActivate: [LoadAllergieTypeGuard] },
  { path: 'values', component: AllergieValueComponent},
  { path: '**', redirectTo: 'allergie-value', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergiesRoutingModule { }
