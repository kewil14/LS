import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
 {
  path: 'games',
  loadChildren: () => import('./games/games.module').then(x =>x.GamesModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
