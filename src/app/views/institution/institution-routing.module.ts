import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionComponent } from './institution.component';
import { HopiComponent } from './type/hopi/hopi.component';

const routes: Routes = [
 
 
  // {
  //   path: '/assurance',
  //   component:
  // }
  {path: 'hopi', component: HopiComponent},
  { path: '**', redirectTo: 'hopi', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionRoutingModule { }
