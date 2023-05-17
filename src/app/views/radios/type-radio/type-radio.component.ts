import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeRadioState } from 'src/app/core/core.state';
import { addTypeRadio, deleteTypeRadio, dellTypeRadio, erreurTypeRadios, setTypeRadio } from 'src/app/core/ngrx/type-radio/type-radio.actions';
import { TypeRadioState } from 'src/app/core/ngrx/type-radio/type-radio.state';
import { TypeRadio } from 'src/app/core/shared/models/type-radio.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-type-radio',
  templateUrl: './type-radio.component.html',
  styleUrls: ['./type-radio.component.scss']
})
export class TypeRadioComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  typeRadios$!: Observable<TypeRadioState>;
  operationTypeRadio$ = new BehaviorSubject<{operation: string, typeRadio: TypeRadio}>({operation: OperationEnum.CREATE, typeRadio: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  typeRadios: Array<TypeRadio> = [];
  currentTypeRadio!: TypeRadio;
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
    this.typeRadios$ = this.store.select(selectTypeRadioState).pipe();
    this.loadTypeRadios();
    this.onCreateTypeRadio();

    this.onActionTypeRadios();
  }

  private onActionTypeRadios(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeRadios)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeRadio)
      ).subscribe(() => {
        this.onCreateTypeRadio();
        this.loadingOperation$.next(false);
        this.loadTypeRadios();
      }),
      this.actionService.pipe(ofType(addTypeRadio)).subscribe(() => {
        this.onCreateTypeRadio();
        this.loadingOperation$.next(false);
        this.loadTypeRadios();
      }),
      this.actionService.pipe(ofType(dellTypeRadio)).subscribe(() => {
        this.onCreateTypeRadio();
        this.loadTypeRadios();
      })
    )
  }

  onCreateTypeRadio(): void {
    this.loadingOperation$.next(false);
    this.operationTypeRadio$.next({operation: OperationEnum.CREATE, typeRadio: {}});
  }

  onEditTypeRadio(typeRadio: TypeRadio): void {
    this.loadingOperation$.next(false);
    this.operationTypeRadio$.next({operation: OperationEnum.UPDATE, typeRadio: typeRadio});
  }

  loadTypeRadios(): void {
    this.typeRadios = [];
    setTimeout(() => {
      this.store.select(selectTypeRadioState).pipe().subscribe( (data) => {
        this.typeRadios = data.typeRadios;
      }
    )
    }, 1000);
  }
  delleteTypeRadio(idTypeRadio: any): void {
    this.store.dispatch(deleteTypeRadio({idTypeRadio: idTypeRadio}));
  }
}
