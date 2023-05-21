import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { selectRoleState } from 'src/app/core/core.state';
import { deleteRole, erreurRoles } from 'src/app/core/ngrx/role/role.actions';
import { RoleState } from 'src/app/core/ngrx/role/role.state';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit, OnDestroy{

  roleState$!: Observable<RoleState>;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dbOptions: any = {};
  breadCrumbItems!: Array<{}>;
  isEdit: boolean = false;
  roles: Role[]=[]
  subscriptions: Subscription[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private storeService: Store,
    private router: Router,
    private actionService: Actions
  ){}
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  

  ngOnInit(): void {
    this.getTitlePattern();
    
    this.dbOptions = this.localStorageService.dbOptions();
    this.roleState$ = this.storeService.select(selectRoleState).pipe();
    this.roleState$.subscribe(data => console.log(data));
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
      });
    }, 2000);
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
    this.router.navigateByUrl('/admin/authorizations/roles/add-role');
  }

}
