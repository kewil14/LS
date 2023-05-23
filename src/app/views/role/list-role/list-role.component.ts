import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectRoleState } from 'src/app/core/core.state';
import { deleteRole, erreurRoles, findAllAuthorities } from 'src/app/core/ngrx/role/role.actions';
import { RoleState } from 'src/app/core/ngrx/role/role.state';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
import { RoleService } from 'src/app/core/shared/services/services-role/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit, OnDestroy{

  roleState$!: Observable<RoleState>;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  role$ = new BehaviorSubject<{operation: string, role: Role}>({operation: OperationEnum.CREATE, role: {}});
  authorities$ =new BehaviorSubject<Role[]>([])
  dbOptions: any = {};
  breadCrumbItems!: Array<{}>;
  isEdit: boolean = false;
  roles: Role[]=[]
  subscriptions: Subscription[] = [];
  operationEnum: typeof OperationEnum = OperationEnum;


  constructor(
    private localStorageService: LocalStorageService,
    private storeService: Store,
    private router: Router,
    private actionService: Actions,
    private modalService: NgbModal,
    private roleService: RoleService
  ){}
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  

  ngOnInit(): void {
    this.getTitlePattern();
    
    this.dbOptions = this.localStorageService.dbOptions();
    this.roleState$ = this.storeService.select(selectRoleState).pipe();
    this.loadRoles();
    this.actionRole()

  }


  actionRole(): void {
    this.subscriptions.push(
      this.actionService.pipe(ofType(erreurRoles)).subscribe(({messages}) => {
        console.log(messages);
      }),

    )
  }

  loadRoles(): void {
    this.roles = [];
    
    setTimeout(() => {
      this.storeService.select(selectRoleState).pipe(map(({roles}) => roles)).subscribe((roles) => {
        this.roles = roles;
        console.log(this.roles)
      });
    }, 1000);
  }


  getTitlePattern(): void {
    this.breadCrumbItems = [
      { label: 'TITLES.AUTHORITIES.AUTHORITY' },
      { label: 'TITLES.AUTHORITIES.AUTHORITY', active: true }
    ];
  }

  onDelete(role:Role){
    this.storeService.dispatch(deleteRole({role}))
  }

  onAddRole(){
    this.loading$.next(false);
    this.role$.next({operation: OperationEnum.CREATE, role: {}});
  }

  onUpdateRole(role: Role){
    this.loading$.next(false)
    this.role$.next({role: role, operation: OperationEnum.UPDATE})
  }

  onGetAuthorities(templateView: any, name:string){
    this.modalService.open(templateView, { size: 'xl', scrollable:true, centered: true });
    this.roleService.findAllAuthorities(name).subscribe(
      data => this.authorities$.next(data)
    )
  }

}
