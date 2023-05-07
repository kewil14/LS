import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeLaboratoireState } from 'src/app/core/core.state';
import { addTypeLaboratoire, deleteTypeLaboratoire, dellTypeLaboratoire, erreurTypeLaboratoires, setTypeLaboratoire } from 'src/app/core/ngrx/type-laboratoire/type-laboratoire.actions';
import { TypeLaboratoireState } from 'src/app/core/ngrx/type-laboratoire/type-laboratoire.state';
import { TypeLaboratoire } from 'src/app/core/shared/models/type-laboratoire.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-type-laboratoire',
  templateUrl: './type-laboratoire.component.html',
  styleUrls: ['./type-laboratoire.component.scss']
})
export class TypeLaboratoireComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  typeLaboratoires$!: Observable<TypeLaboratoireState>;
  operationTypeLaboratoire$ = new BehaviorSubject<{operation: string, typeLaboratoire: TypeLaboratoire}>({operation: OperationEnum.CREATE, typeLaboratoire: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  typeLaboratoires: Array<TypeLaboratoire> = [];
  currentTypeLaboratoire!: TypeLaboratoire;
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
    this.typeLaboratoires$ = this.store.select(selectTypeLaboratoireState).pipe();
    this.loadTypeLaboratoires();
    this.onCreateTypeLaboratoire();

    this.onActionTypeLaboratoires();
  }

  private onActionTypeLaboratoires(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeLaboratoires)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeLaboratoire)
      ).subscribe(() => {
        this.onCreateTypeLaboratoire();
        this.loadingOperation$.next(false);
        this.loadTypeLaboratoires();
      }),
      this.actionService.pipe(ofType(addTypeLaboratoire)).subscribe(() => {
        this.onCreateTypeLaboratoire();
        this.loadingOperation$.next(false);
        this.loadTypeLaboratoires();
      }),
      this.actionService.pipe(ofType(dellTypeLaboratoire)).subscribe(() => {
        this.onCreateTypeLaboratoire();
        this.loadTypeLaboratoires();
      })
    )
  }

  onCreateTypeLaboratoire(): void {
    this.loadingOperation$.next(false);
    this.operationTypeLaboratoire$.next({operation: OperationEnum.CREATE, typeLaboratoire: {}});
  }

  onEditTypeLaboratoire(typeLaboratoire: TypeLaboratoire): void {
    this.loadingOperation$.next(false);
    this.operationTypeLaboratoire$.next({operation: OperationEnum.UPDATE, typeLaboratoire: typeLaboratoire});
  }

  loadTypeLaboratoires(): void {
    this.typeLaboratoires = [];
    setTimeout(() => {
      this.store.select(selectTypeLaboratoireState).pipe().subscribe( (data) => {
        this.typeLaboratoires = data.typeLaboratoires;
      }
    )
    }, 1000);
  }
  delleteTypeLaboratoire(idTypeLaboratoire: any): void {
    this.store.dispatch(deleteTypeLaboratoire({idTypeLaboratoire: idTypeLaboratoire}));
  }
}
