import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeIntrantComponent } from './type-intrant/type-intrant.component';
import { IntrantValueComponent } from './intrant-value/intrant-value.component';
import { LoadTypeIntrantGuard } from 'src/app/core/shared/guards/intrants/load-type-intrant.guard';
import { LoadIntrantValueGuard } from 'src/app/core/shared/guards/intrants/load-intrant-value.guard';

const routes: Routes = [
  { path: 'types', component: TypeIntrantComponent, canActivate: [LoadTypeIntrantGuard]},
  { path: 'values', component: IntrantValueComponent, canActivate: [LoadIntrantValueGuard, LoadTypeIntrantGuard]},
  { path: '**', redirectTo: 'values', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntrantsRoutingModule { }
