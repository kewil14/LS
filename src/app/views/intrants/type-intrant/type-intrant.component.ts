import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeIntrantState } from 'src/app/core/core.state';
import { addTypeIntrant, deleteTypeIntrant, dellTypeIntrant, erreurTypeIntrants, setTypeIntrant } from 'src/app/core/ngrx/type-intrant/type-intrant.actions';
import { TypeIntrantState } from 'src/app/core/ngrx/type-intrant/type-intrant.state';
import { TypeIntrant } from 'src/app/core/shared/models/type-intrant.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-type-intrant',
  templateUrl: './type-intrant.component.html',
  styleUrls: ['./type-intrant.component.scss']
})
export class TypeIntrantComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  typeIntrants$!: Observable<TypeIntrantState>;
  operationTypeIntrant$ = new BehaviorSubject<{operation: string, typeIntrant: TypeIntrant}>({operation: OperationEnum.CREATE, typeIntrant: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  typeIntrants: Array<TypeIntrant> = [];
  currentTypeIntrant!: TypeIntrant;
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
    this.typeIntrants$ = this.store.select(selectTypeIntrantState).pipe();
    this.loadTypeIntrants();
    this.onCreateTypeIntrant();

    this.onActionTypeIntrants();
  }

  private onActionTypeIntrants(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurTypeIntrants)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setTypeIntrant)
      ).subscribe(() => {
        this.onCreateTypeIntrant();
        this.loadingOperation$.next(false);
        this.loadTypeIntrants();
      }),
      this.actionService.pipe(ofType(addTypeIntrant)).subscribe(() => {
        this.onCreateTypeIntrant();
        this.loadingOperation$.next(false);
        this.loadTypeIntrants();
      }),
      this.actionService.pipe(ofType(dellTypeIntrant)).subscribe(() => {
        this.onCreateTypeIntrant();
        this.loadTypeIntrants();
      })
    )
  }

  onCreateTypeIntrant(): void {
    this.loadingOperation$.next(false);
    this.operationTypeIntrant$.next({operation: OperationEnum.CREATE, typeIntrant: {}});
  }

  onEditTypeIntrant(typeIntrant: TypeIntrant): void {
    this.loadingOperation$.next(false);
    this.operationTypeIntrant$.next({operation: OperationEnum.UPDATE, typeIntrant: typeIntrant});
  }

  loadTypeIntrants(): void {
    this.typeIntrants = [];
    setTimeout(() => {
      this.store.select(selectTypeIntrantState).pipe().subscribe( (data) => {
        this.typeIntrants = data.typeIntrants;
      }
    )
    }, 1000);
  }
  delleteTypeIntrant(idTypeIntrant: any): void {
    this.store.dispatch(deleteTypeIntrant({idTypeIntrant: idTypeIntrant}));
  }
}
