import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTraitmentValueState } from 'src/app/core/core.state';
import { addTraitmentValue, deleteTraitmentValue, dellTraitmentValue, erreurTraitmentValues, setTraitmentValue, updateTraitmentValue } from 'src/app/core/ngrx/traitment-value/traitment-value.actions';
import { TraitmentValueState } from 'src/app/core/ngrx/traitment-value/traitment-value.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { TraitmentValue } from 'src/app/core/shared/models/traitment-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-traitment-value',
  templateUrl: './traitment-value.component.html',
  styleUrls: ['./traitment-value.component.scss']
})
export class TraitmentValueComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  traitmentValues$!: Observable<TraitmentValueState>;
  operationTraitmentValue$ = new BehaviorSubject<{operation: string, traitmentValue: TraitmentValue}>({operation: OperationEnum.CREATE, traitmentValue: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  traitmentValues: Array<TraitmentValue> = [];
  currentTraitmentValue!: TraitmentValue;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  traitment$ = new BehaviorSubject<TraitmentValue>({});
  loadingActivate$ = new BehaviorSubject<boolean>(false);
  loadingDelete$ =new BehaviorSubject<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private store: Store,
    private actionService: Actions,
    private modalService: NgbModal
  ) { }
  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe())}

  ngOnInit(): void {
    this.dtOptions = this.localStorageService.dbOptions();
    this.traitmentValues$ = this.store.select(selectTraitmentValueState).pipe();
    this.loadTraitmentValues();
    this.onCreateTraitmentValue();

    this.onActionTraitmentValues();
  }

  private onActionTraitmentValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTraitmentValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTraitmentValue)
      ).subscribe(() => {
        this.onCreateTraitmentValue();
        this.loadingOperation$.next(false);
        this.loadTraitmentValues();
      }),
      this.actionService.pipe(ofType(addTraitmentValue)).subscribe(() => {
        this.onCreateTraitmentValue();
        this.loadingOperation$.next(false);
        this.loadTraitmentValues();
      }),
      this.actionService.pipe(ofType(dellTraitmentValue)).subscribe(() => {
        this.onCreateTraitmentValue();
        this.loadTraitmentValues();
      })
    )
  }

  onCreateTraitmentValue(): void {
    this.loadingOperation$.next(false);
    this.operationTraitmentValue$.next({operation: OperationEnum.CREATE, traitmentValue: {}});
  }

  onEditTraitmentValue(traitmentValue: TraitmentValue): void {
    this.loadingOperation$.next(false);
    this.operationTraitmentValue$.next({operation: OperationEnum.UPDATE, traitmentValue: traitmentValue});
  }

  loadTraitmentValues(): void {
    this.traitmentValues = [];
    setTimeout(() => {
      this.store.select(selectTraitmentValueState).pipe().subscribe( (data) => {
        this.traitmentValues = data.traitmentValues;
      }
    )
    }, 1000);
  }
  delleteTraitmentValue(idTraitmentValue: any): void {
    this.store.dispatch(deleteTraitmentValue({idTraitmentValue: idTraitmentValue}));
  }
  detailTraitment(templateView: TemplateRef<any>, traitment: TraitmentValue){
    this.traitment$.next(traitment);
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionTraitment($event: {action: TypeActionEnum, traitment: TraitmentValue}){
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteTraitmentValue({idTraitmentValue: $event.traitment.id}));
    } else {
      this.store.dispatch(updateTraitmentValue({traitmentValue: $event.traitment}));
    }
  }
}
