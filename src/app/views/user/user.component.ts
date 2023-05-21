import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/shared/models/modal-customer/user.modal';

import { users } from './data'
import { APP_COLORS } from 'src/app/core/config/app.enums.config';
import { UserState } from 'src/app/core/ngrx/user/user.state';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/core/core.state';
import { DataStateEnum } from 'src/app/core/config/data.state.enum';

@Component({
  selector: 'health-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userState$!: Observable<UserState>;
  dbOptions: any = {}
  users$!: Observable<User[]>
  color!: string
  dataStateEnum: typeof DataStateEnum = DataStateEnum;
  

  constructor(
    private localStorageService: LocalStorageService,
    private storeService: Store
  ){}

  ngOnInit(): void {
    this.dbOptions = this.localStorageService.dbOptions();

    this.userState$ = this.storeService.select(selectUserState).pipe();
    this.users$ = of(users)
  }

  ligneColor(firstLetter?: string){
    
    if(firstLetter?.startsWith("A")==true) this.color=APP_COLORS.PRIMARY
    if(firstLetter?.startsWith("B"||"C"||"D"||"E")) this.color=APP_COLORS.SECONDARY
    if(firstLetter?.startsWith("E"||"E"||"F")) this.color=APP_COLORS.WARNING
    if(firstLetter?.startsWith("N")) this.color=APP_COLORS.DANGER
    if(firstLetter?.startsWith("S")) this.color=APP_COLORS.INFO
    if(firstLetter?.startsWith("T")) this.color=APP_COLORS.DANGER
    if(firstLetter?.startsWith("U"||"V"||"W")) this.color=APP_COLORS.DARK
    if(firstLetter?.startsWith("X"||"Y"||"Z")) this.color=APP_COLORS.SUCCESS
    return this.color
  }
  

}
