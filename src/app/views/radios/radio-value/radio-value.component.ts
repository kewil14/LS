import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectRadioValueState } from 'src/app/core/core.state';
import { addRadioValue, deleteRadioValue, dellRadioValue, erreurRadioValues, setRadioValue, updateRadioValue } from 'src/app/core/ngrx/radio-value/radio-value.actions';
import { RadioValueState } from 'src/app/core/ngrx/radio-value/radio-value.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { RadioValue } from 'src/app/core/shared/models/radio-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
@Component({
  selector: 'health-radio-value',
  templateUrl: './radio-value.component.html',
  styleUrls: ['./radio-value.component.scss']
})
export class RadioValueComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  radioValues$!: Observable<RadioValueState>;
  operationRadioValue$ = new BehaviorSubject<{operation: string, radioValue: RadioValue}>({operation: OperationEnum.CREATE, radioValue: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  radioValues: Array<RadioValue> = [];
  currentRadioValue!: RadioValue;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  radio$ = new BehaviorSubject<RadioValue>({});
  loadingActivate$ = new BehaviorSubject<boolean>(false);
  loadingDelete$ =new BehaviorSubject<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private store: Store,
    private actionService: Actions,
    private modalService: NgbModal,
  ) { }
  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe())}

  ngOnInit(): void {
    this.dtOptions = this.localStorageService.dbOptions();
    this.radioValues$ = this.store.select(selectRadioValueState).pipe();
    this.loadRadioValues();
    this.onCreateRadioValue();

    this.onActionRadioValues();
  }

  private onActionRadioValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurRadioValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setRadioValue)
      ).subscribe(() => {
        this.onCreateRadioValue();
        this.loadingOperation$.next(false);
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.loadRadioValues();
      }),
      this.actionService.pipe(ofType(addRadioValue)).subscribe(() => {
        this.onCreateRadioValue();
        this.loadingOperation$.next(false);
        this.loadRadioValues();
      }),
      this.actionService.pipe(ofType(dellRadioValue)).subscribe(() => {
        this.onCreateRadioValue();
        this.loadRadioValues();
      })
    )
  }

  onCreateRadioValue(): void {
    this.loadingOperation$.next(false);
    this.operationRadioValue$.next({operation: OperationEnum.CREATE, radioValue: {}});
  }

  onEditRadioValue(radioValue: RadioValue): void {
    this.loadingOperation$.next(false);
    this.operationRadioValue$.next({operation: OperationEnum.UPDATE, radioValue: radioValue});
  }

  loadRadioValues(): void {
    this.radioValues = [];
    setTimeout(() => {
      this.store.select(selectRadioValueState).pipe().subscribe( (data) => {
        this.radioValues = data.radioValues;
      }
    )
    }, 1000);
  }
  delleteRadioValue(idRadioValue: any): void {
    this.store.dispatch(deleteRadioValue({idRadioValue: idRadioValue}));
  }
  detailRadio(templateView: TemplateRef<any>, radio: RadioValue){
    this.radio$.next(radio);
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionFamille($event: {action: TypeActionEnum, radio: RadioValue}){
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteRadioValue({idRadioValue: $event.radio.id}));
    } else {
      this.store.dispatch(updateRadioValue({radioValue: $event.radio}));
    }
  }
}
