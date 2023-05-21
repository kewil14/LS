import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectAntecedentValueState } from 'src/app/core/core.state';
import { addAntecedentValue, deleteAntecedentValue, dellAntecedentValue, erreurAntecedentValues, setAntecedentValue, updateAntecedentValue } from 'src/app/core/ngrx/antecedent-value/antecedent-value.actions';
import { AntecedentValueState } from 'src/app/core/ngrx/antecedent-value/antecedent-value.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { AntecedentValue } from 'src/app/core/shared/models/antecedent-value.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
@Component({
  selector: 'health-antecedent-value',
  templateUrl: './antecedent-value.component.html',
  styleUrls: ['./antecedent-value.component.scss']
})
export class AntecedentValueComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  antecedentValues$!: Observable<AntecedentValueState>;
  operationAntecedentValue$ = new BehaviorSubject<{operation: string, antecedentValue: AntecedentValue}>({operation: OperationEnum.CREATE, antecedentValue: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  antecedentValues: Array<AntecedentValue> = [];
  currentAntecedentValue!: AntecedentValue;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  antecedent$ = new BehaviorSubject<AntecedentValue>({});
  loadingActivate$ = new BehaviorSubject<boolean>(false);
  loadingDelete$ =new BehaviorSubject<boolean>(false);
  titleModal$ = new BehaviorSubject<string>('');
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
    this.antecedentValues$ = this.store.select(selectAntecedentValueState).pipe();
    this.loadAntecedentValues();
    this.onCreateAntecedentValue();

    this.onActionAntecedentValues();
  }

  private onActionAntecedentValues(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurAntecedentValues)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setAntecedentValue)
      ).subscribe(() => {
        this.onCreateAntecedentValue();
        this.loadingOperation$.next(false);
        this.loadAntecedentValues();
      }),
      this.actionService.pipe(ofType(addAntecedentValue)).subscribe(() => {
        this.onCreateAntecedentValue();
        this.loadingOperation$.next(false);
        this.loadAntecedentValues();
      }),
      this.actionService.pipe(ofType(dellAntecedentValue)).subscribe(() => {
        this.onCreateAntecedentValue();
        this.loadAntecedentValues();
      })
    )
  }

  onCreateAntecedentValue(): void {
    this.loadingOperation$.next(false);
    this.operationAntecedentValue$.next({operation: OperationEnum.CREATE, antecedentValue: {}});
  }

  onEditAntecedentValue(antecedentValue: AntecedentValue): void {
    this.loadingOperation$.next(false);
    this.operationAntecedentValue$.next({operation: OperationEnum.UPDATE, antecedentValue: antecedentValue});
  }

  loadAntecedentValues(): void {
    this.antecedentValues = [];
    setTimeout(() => {
      this.store.select(selectAntecedentValueState).pipe().subscribe( (data) => {
        this.antecedentValues = data.antecedentValues;
      }
    )
    }, 1000);
  }
  delleteAntecedentValue(idAntecedentValue: any): void {
    this.store.dispatch(deleteAntecedentValue({idAntecedentValue: idAntecedentValue}));
  }
  detailAntecedent(templateView: TemplateRef<any>, antecedent: AntecedentValue){
    this.antecedent$.next(antecedent);
    this.titleModal$.next('Detail Antecedent')
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionAntecedent($event: {action: TypeActionEnum, antecedent: AntecedentValue}){
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteAntecedentValue({idAntecedentValue: $event.antecedent.id}));
    } else {
      this.store.dispatch(updateAntecedentValue({antecedentValue: $event.antecedent}));
    }
  }
}
