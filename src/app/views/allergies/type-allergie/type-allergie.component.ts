import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeAllergieState } from 'src/app/core/core.state';
import { addTypeAllergie, deleteTypeAllergie, dellTypeAllergie, erreurTypeAllergies, setTypeAllergie } from 'src/app/core/ngrx/type-allergie/type-allergie.actions';
import { TypeAllergieState } from 'src/app/core/ngrx/type-allergie/type-allergie.state';
import { TypeAllergie } from 'src/app/core/shared/models/type-allergie.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-type-allergie',
  templateUrl: './type-allergie.component.html',
  styleUrls: ['./type-allergie.component.scss']
})
export class TypeAllergieComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  TypeAllergies$!: Observable<TypeAllergieState>;
  operationTypeAllergie$ = new BehaviorSubject<{operation: string, typeAllergie: TypeAllergie}>({operation: OperationEnum.CREATE, typeAllergie: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  TypeAllergies: Array<TypeAllergie> = [];
  currentTypeAllergie!: TypeAllergie;
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
    this.TypeAllergies$ = this.store.select(selectTypeAllergieState).pipe();
    this.loadTypeAllergies();
    this.onCreateTypeAllergie();
    this.onActionTypeAllergies();
  }

  private onActionTypeAllergies(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeAllergies)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeAllergie)
      ).subscribe(() => {
        this.onCreateTypeAllergie();
        this.loadingOperation$.next(false);
        this.loadTypeAllergies();
      }),
      this.actionService.pipe(ofType(addTypeAllergie)).subscribe(() => {
        this.onCreateTypeAllergie();
        this.loadingOperation$.next(false);
        this.loadTypeAllergies();
      }),
      this.actionService.pipe(ofType(dellTypeAllergie)).subscribe(() => {
        this.onCreateTypeAllergie();
        this.loadTypeAllergies();
      })
    )
  }

  onCreateTypeAllergie(): void {
    this.loadingOperation$.next(false);
    this.operationTypeAllergie$.next({operation: OperationEnum.CREATE, typeAllergie: {}});
  }

  onEditTypeAllergie(TypeAllergie: TypeAllergie): void {
    this.loadingOperation$.next(false);
    this.operationTypeAllergie$.next({operation: OperationEnum.UPDATE, typeAllergie: TypeAllergie});
  }

  loadTypeAllergies(): void {
    this.TypeAllergies = [];
    setTimeout(() => {
      this.store.select(selectTypeAllergieState).pipe().subscribe( (data) => {
        this.TypeAllergies = data.typeAllergies;
      }
    )
    }, 1000);
  }
  delleteTypeAllergie(idTypeAllergie: any): void {
    this.store.dispatch(deleteTypeAllergie({idTypeAllergie: idTypeAllergie}));
  }
}

