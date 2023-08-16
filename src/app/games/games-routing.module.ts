import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScratchComponent } from './scratch/scratch.component';
import { PickComponent } from './pick/pick.component';
import { CinqComponent } from './cinq/cinq.component';

const routes: Routes = [
  {
    path:  'scratch',
    component: ScratchComponent
  },
  {
    path: 'pick',
    component: PickComponent
  },
  {
    path: 'cinq',
    component: CinqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
