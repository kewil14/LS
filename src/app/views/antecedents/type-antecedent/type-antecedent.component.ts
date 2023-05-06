import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeAntecedentState } from 'src/app/core/core.state';
import { addTypeAntecedent, deleteTypeAntecedent, dellTypeAntecedent, erreurTypeAntecedents, setTypeAntecedent } from 'src/app/core/ngrx/type-antecedent/type-antecedent.actions';
import { TypeAntecedentState } from 'src/app/core/ngrx/type-antecedent/type-antecedent.state';
import { TypeAntecedent } from 'src/app/core/shared/models/type-antecedent.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';


@Component({
  selector: 'health-type-antecedent',
  templateUrl: './type-antecedent.component.html',
  styleUrls: ['./type-antecedent.component.scss']
})
export class TypeAntecedentComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  typeAntecedents$!: Observable<TypeAntecedentState>;
  operationTypeAntecedent$ = new BehaviorSubject<{operation: string, typeAntecedent: TypeAntecedent}>({operation: OperationEnum.CREATE, typeAntecedent: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  typeAntecedents: Array<TypeAntecedent> = [];
  currentTypeAntecedent!: TypeAntecedent;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});

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
    this.typeAntecedents$ = this.store.select(selectTypeAntecedentState).pipe();
    this.loadTypeAntecedents();
    this.onCreateTypeAntecedent();

    this.onActionTypeAntecedents();
  }

  private onActionTypeAntecedents(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeAntecedents)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeAntecedent)
      ).subscribe(() => {
        this.onCreateTypeAntecedent();
        this.loadingOperation$.next(false);
        this.loadTypeAntecedents();
      }),
      this.actionService.pipe(ofType(addTypeAntecedent)).subscribe(() => {
        this.onCreateTypeAntecedent();
        this.loadingOperation$.next(false);
        this.loadTypeAntecedents();
      }),
      this.actionService.pipe(ofType(dellTypeAntecedent)).subscribe(() => {
        this.onCreateTypeAntecedent();
        this.loadTypeAntecedents();
      })
    )
  }

  onCreateTypeAntecedent(): void {
    this.loadingOperation$.next(false);
    this.operationTypeAntecedent$.next({operation: OperationEnum.CREATE, typeAntecedent: {}});
  }

  onEditTypeAntecedent(typeAntecedent: TypeAntecedent): void {
    this.loadingOperation$.next(false);
    this.operationTypeAntecedent$.next({operation: OperationEnum.UPDATE, typeAntecedent: typeAntecedent});
  }

  loadTypeAntecedents(): void {
    this.typeAntecedents = [];
    setTimeout(() => {
      this.store.select(selectTypeAntecedentState).pipe().subscribe( (data) => {
        this.typeAntecedents = data.typeAntecedents;
      }
    )
    }, 1000);
  }
  delleteTypeAntecedent(idTypeAntecedent: any): void {
    this.store.dispatch(deleteTypeAntecedent({idTypeAntecedent: idTypeAntecedent}));
  }
}
