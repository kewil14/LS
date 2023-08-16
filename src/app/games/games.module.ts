import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { PickComponent } from './pick/pick.component';
import { ScratchComponent } from './scratch/scratch.component';
import { CinqComponent } from './cinq/cinq.component';


@NgModule({
  declarations: [
    PickComponent,
    ScratchComponent,
    CinqComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
