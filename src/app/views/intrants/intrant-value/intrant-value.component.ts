import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectIntrantValueState } from 'src/app/core/core.state';
import { addIntrantValue, deleteIntrantValue, dellIntrantValue, erreurIntrantValues, setIntrantValue } from 'src/app/core/ngrx/intrant-value/intrant-value.actions';
import { IntrantValueState } from 'src/app/core/ngrx/intrant-value/intrant-value.state';
import { IntrantValue } from 'src/app/core/shared/models/intrant-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-intrant-value',
  templateUrl: './intrant-value.component.html',
  styleUrls: ['./intrant-value.component.scss']
})
export class IntrantValueComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  intrantValues$!: Observable<IntrantValueState>;
  operationIntrantValue$ = new BehaviorSubject<{operation: string, intrantValue: IntrantValue}>({operation: OperationEnum.CREATE, intrantValue: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  intrantValues: Array<IntrantValue> = [];
  currentIntrantValue!: IntrantValue;
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
    this.intrantValues$ = this.store.select(selectIntrantValueState).pipe();
    this.loadIntrantValues();
    this.onCreateIntrantValue();

    this.onActionIntrantValues();
  }

  private onActionIntrantValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurIntrantValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setIntrantValue)
      ).subscribe(() => {
        this.onCreateIntrantValue();
        this.loadingOperation$.next(false);
        this.loadIntrantValues();
      }),
      this.actionService.pipe(ofType(addIntrantValue)).subscribe(() => {
        this.onCreateIntrantValue();
        this.loadingOperation$.next(false);
        this.loadIntrantValues();
      }),
      this.actionService.pipe(ofType(dellIntrantValue)).subscribe(() => {
        this.onCreateIntrantValue();
        this.loadIntrantValues();
      })
    )
  }

  onCreateIntrantValue(): void {
    this.loadingOperation$.next(false);
    this.operationIntrantValue$.next({operation: OperationEnum.CREATE, intrantValue: {}});
  }

  onEditIntrantValue(intrantValue: IntrantValue): void {
    this.loadingOperation$.next(false);
    this.operationIntrantValue$.next({operation: OperationEnum.UPDATE, intrantValue: intrantValue});
  }

  loadIntrantValues(): void {
    this.intrantValues = [];
    setTimeout(() => {
      this.store.select(selectIntrantValueState).pipe().subscribe( (data) => {
        this.intrantValues = data.intrantValues;
      }
    )
    }, 1000);
  }
  delleteIntrantValue(idIntrantValue: any): void {
    this.store.dispatch(deleteIntrantValue({idIntrantValue: idIntrantValue}));
  }
}
