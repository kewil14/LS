import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectLaboratoireValueState } from 'src/app/core/core.state';
import { addLaboratoireValue, deleteLaboratoireValue, dellLaboratoireValue, erreurLaboratoireValues, setLaboratoireValue } from 'src/app/core/ngrx/laboratoire-value/laboratoire-value.actions';
import { LaboratoireValueState } from 'src/app/core/ngrx/laboratoire-value/laboratoire-value.state';
import { LaboratoireValue } from 'src/app/core/shared/models/laboratoire-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-laboratoire-value',
  templateUrl: './laboratoire-value.component.html',
  styleUrls: ['./laboratoire-value.component.scss']
})
export class LaboratoireValueComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  laboratoireValues$!: Observable<LaboratoireValueState>;
  operationLaboratoireValue$ = new BehaviorSubject<{operation: string, laboratoireValue: LaboratoireValue}>({operation: OperationEnum.CREATE, laboratoireValue: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  laboratoireValues: Array<LaboratoireValue> = [];
  currentLaboratoireValue!: LaboratoireValue;
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
    this.laboratoireValues$ = this.store.select(selectLaboratoireValueState).pipe();
    this.loadLaboratoireValues();
    this.onCreateLaboratoireValue();

    this.onActionLaboratoireValues();
  }

  private onActionLaboratoireValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurLaboratoireValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setLaboratoireValue)
      ).subscribe(() => {
        this.onCreateLaboratoireValue();
        this.loadingOperation$.next(false);
        this.loadLaboratoireValues();
      }),
      this.actionService.pipe(ofType(addLaboratoireValue)).subscribe(() => {
        this.onCreateLaboratoireValue();
        this.loadingOperation$.next(false);
        this.loadLaboratoireValues();
      }),
      this.actionService.pipe(ofType(dellLaboratoireValue)).subscribe(() => {
        this.onCreateLaboratoireValue();
        this.loadLaboratoireValues();
      })
    )
  }

  onCreateLaboratoireValue(): void {
    this.loadingOperation$.next(false);
    this.operationLaboratoireValue$.next({operation: OperationEnum.CREATE, laboratoireValue: {}});
  }

  onEditLaboratoireValue(laboratoireValue: LaboratoireValue): void {
    this.loadingOperation$.next(false);
    this.operationLaboratoireValue$.next({operation: OperationEnum.UPDATE, laboratoireValue: laboratoireValue});
  }

  loadLaboratoireValues(): void {
    this.laboratoireValues = [];
    setTimeout(() => {
      this.store.select(selectLaboratoireValueState).pipe().subscribe( (data) => {
        this.laboratoireValues = data.laboratoireValues;
      }
    )
    }, 1000);
  }
  delleteLaboratoireValue(idLaboratoireValue: any): void {
    this.store.dispatch(deleteLaboratoireValue({idLaboratoireValue: idLaboratoireValue}));
  }
}
