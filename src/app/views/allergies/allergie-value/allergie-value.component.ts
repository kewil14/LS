import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectAllergieValueState } from 'src/app/core/core.state';
import { addAllergieValue, deleteAllergieValue, dellAllergieValue, erreurAllergieValues, setAllergieValue } from 'src/app/core/ngrx/allergie-value/allergie-value.actions';
import { AllergieValueState } from 'src/app/core/ngrx/allergie-value/allergie-value.state';
import { AllergieValue } from 'src/app/core/shared/models/allergie-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-allergie-value',
  templateUrl: './allergie-value.component.html',
  styleUrls: ['./allergie-value.component.scss']
})
export class AllergieValueComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  subscriptions: Array<Subscription> = [];
  AllergieValues$!: Observable<AllergieValueState>;
  operationAllergieValue$ = new BehaviorSubject<{operation: string, valueAllergie: AllergieValue}>({operation: OperationEnum.CREATE, valueAllergie: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  allergieValues: Array<AllergieValue> = [];
  currentAllergieValue!: AllergieValue;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private store: Store,
    private actionService: Actions
  ) { }
  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe())}

  ngOnInit(): void {
    this.dtOptions = this.localStorageService.dbOptions();
    this.AllergieValues$ = this.store.select(selectAllergieValueState).pipe();
    this.loadAllergieValues();
    this.onCreateAllergieValue();
    this.onActionAllergieValues();
  }

  private onActionAllergieValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurAllergieValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setAllergieValue)
      ).subscribe(() => {
        this.onCreateAllergieValue();
        this.loadingOperation$.next(false);
        this.loadAllergieValues();
      }),
      this.actionService.pipe(ofType(addAllergieValue)).subscribe(() => {
        this.onCreateAllergieValue();
        this.loadingOperation$.next(false);
        this.loadAllergieValues();
      }),
      this.actionService.pipe(ofType(dellAllergieValue)).subscribe(() => {
        this.onCreateAllergieValue();
        this.loadAllergieValues();
      })
    )
  }

  onCreateAllergieValue(): void {
    this.loadingOperation$.next(false);
    this.operationAllergieValue$.next({operation: OperationEnum.CREATE, valueAllergie: {}});
  }

  onEditAllergieValue(allergieValue: AllergieValue): void {
    this.loadingOperation$.next(false);
    this.operationAllergieValue$.next({operation: OperationEnum.UPDATE, valueAllergie: allergieValue});
  }

  loadAllergieValues(): void {
    this.allergieValues = [];
    setTimeout(() => {
      this.store.select(selectAllergieValueState).pipe().subscribe( (data) => {
        this.allergieValues = data.allergieValues;
      }
    )
    }, 1000);
  }
  delleteAllergieValue(idAllergieValue: any): void {
    this.store.dispatch(deleteAllergieValue({idAllergieValue: idAllergieValue}));
  }
}

