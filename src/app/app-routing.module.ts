import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { AuthInstitutionGuard } from './core/shared/guards/auth-institution.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), canActivate: [AuthGuard, AuthInstitutionGuard] },
  { path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
