import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectRoleState } from 'src/app/core/core.state';
import { createRoleAdmin, setRole, updateRole } from 'src/app/core/ngrx/role/role.actions';
import { Role } from 'src/app/core/shared/models/role.module';
import { RoleService } from 'src/app/core/shared/services/services-role/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit, OnDestroy {

  role$ = new BehaviorSubject<{role: Role, operation: string}>({role: {}, operation: OperationEnum.CREATE});
  loadingRole$ = new BehaviorSubject<boolean>(false);
  subscriptions: Subscription[] = [];
  nameRole!: string
  roleGrantedAuthorities$ = new BehaviorSubject<Array<Role>>([]);
  currentAuthorities: Array<Role> = [];
  currentAuthorities$ = new BehaviorSubject<Array<Role>>([]);
  
  constructor(
    private storeService: Store,
    private actionsService: Actions,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private roleService: RoleService
  ) {this.nameRole=route.snapshot.params['name']}
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  
  ngOnInit(): void {
    this.nameRole=this.route.snapshot.params['name']
    this.actionRoles();
    this.role$.subscribe(data=>console.log(data))
    this.actionsService.pipe(ofType(setRole)).subscribe(({role}) => console.log(role))
  }

  actionRoles(): void {
    this.storeService.select(selectRoleState).pipe(
      map(({roles}) =>roles)
    ).subscribe(roles => roles.forEach(role =>{
      if(this.nameRole==role.name){
        this.role$.next({role: role, operation: OperationEnum.UPDATE});
        this.loadingRole$.next(false);
        this.roleService.findAllAuthorities(role.name).subscribe(authorities => 
          this.roleGrantedAuthorities$.next(authorities));
      }else{
        this.role$.next({role: {}, operation: OperationEnum.ADD});
        this.loadingRole$.next(false);
        this.roleGrantedAuthorities$.next([])
      }
    }))
  }


  


}
