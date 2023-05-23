import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './list-role/list-role.component';
import { LoadRolesGuard } from 'src/app/core/shared/guards/roles/load-roles.guards';
import { CreateRoleComponent } from './create-role/create-role.component';

const routes: Routes = [
  { path: 'list', component: ListRoleComponent, canActivate: [LoadRolesGuard]},
  {path:'create/:name', component: CreateRoleComponent},
  { path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
