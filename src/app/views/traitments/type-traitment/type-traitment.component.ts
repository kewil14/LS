import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeTraitmentState } from 'src/app/core/core.state';
import { addTypeTraitment, deleteTypeTraitment, dellTypeTraitment, erreurTypeTraitments, setTypeTraitment } from 'src/app/core/ngrx/type-traitment/type-traitment.actions';
import { TypeTraitmentState } from 'src/app/core/ngrx/type-traitment/type-traitment.state';
import { TypeTraitment } from 'src/app/core/shared/models/type-traitment.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-type-traitment',
  templateUrl: './type-traitment.component.html',
  styleUrls: ['./type-traitment.component.scss']
})
export class TypeTraitmentComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  typeTraitments$!: Observable<TypeTraitmentState>;
  operationTypeTraitment$ = new BehaviorSubject<{operation: string, typeTraitment: TypeTraitment}>({operation: OperationEnum.CREATE, typeTraitment: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  typeTraitments: Array<TypeTraitment> = [];
  currentTypeTraitment!: TypeTraitment;
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
    this.typeTraitments$ = this.store.select(selectTypeTraitmentState).pipe();
    this.loadTypeTraitments();
    this.onCreateTypeTraitment();

    this.onActionTypeTraitments();
  }

  private onActionTypeTraitments(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeTraitments)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeTraitment)
      ).subscribe(() => {
        this.onCreateTypeTraitment();
        this.loadingOperation$.next(false);
        this.loadTypeTraitments();
      }),
      this.actionService.pipe(ofType(addTypeTraitment)).subscribe(() => {
        this.onCreateTypeTraitment();
        this.loadingOperation$.next(false);
        this.loadTypeTraitments();
      }),
      this.actionService.pipe(ofType(dellTypeTraitment)).subscribe(() => {
        this.onCreateTypeTraitment();
        this.loadTypeTraitments();
      })
    )
  }

  onCreateTypeTraitment(): void {
    this.loadingOperation$.next(false);
    this.operationTypeTraitment$.next({operation: OperationEnum.CREATE, typeTraitment: {}});
  }

  onEditTypeTraitment(typeTraitment: TypeTraitment): void {
    this.loadingOperation$.next(false);
    this.operationTypeTraitment$.next({operation: OperationEnum.UPDATE, typeTraitment: typeTraitment});
  }

  loadTypeTraitments(): void {
    this.typeTraitments = [];
    setTimeout(() => {
      this.store.select(selectTypeTraitmentState).pipe().subscribe( (data) => {
        this.typeTraitments = data.typeTraitments;
      }
    )
    }, 1000);
  }
  delleteTypeTraitment(idTypeTraitment: any): void {
    this.store.dispatch(deleteTypeTraitment({idTypeTraitment: idTypeTraitment}));
  }
}
