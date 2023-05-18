import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAllergieComponent } from './type-allergie/type-allergie.component';
import { AllergieValueComponent } from './allergie-value/allergie-value.component';
import { LoadAllergieTypeGuard } from 'src/app/core/shared/guards/allergies/load-allergie-type.guard';
import { LoadAllergieValueGuard } from 'src/app/core/shared/guards/allergies/load-allergie-value.guard';

const routes: Routes = [
  { path: 'types', component: TypeAllergieComponent, canActivate: [LoadAllergieTypeGuard] },
  { path: 'values', component: AllergieValueComponent, canActivate: [LoadAllergieTypeGuard, LoadAllergieValueGuard] },
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergiesRoutingModule { }
