import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectFamilleState } from 'src/app/core/core.state';
import { addFamille, deleteFamille, dellFamille, erreurFamilles, setFamille, updateFamille } from 'src/app/core/ngrx/famille/famille.actions';
import { FamilleState } from 'src/app/core/ngrx/famille/famille.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Famille } from 'src/app/core/shared/models/famille.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.scss']
})
export class FamillesComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  familles$!: Observable<FamilleState>;
  operationFamille$ = new BehaviorSubject<{operation: string, famille: Famille}>({operation: OperationEnum.CREATE, famille: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  familles: Array<Famille> = [];
  currentFamille!: Famille;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});

  famille$ = new BehaviorSubject<Famille>({});
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
    this.familles$ = this.store.select(selectFamilleState).pipe();
    this.loadFamilles();
    this.onCreateFamille();

    this.onActionFamilles();
  }

  private onActionFamilles(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurFamilles)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setFamille)
      ).subscribe(() => {
        this.onCreateFamille();
        this.loadingOperation$.next(false);
        this.loadFamilles();
      }),
      this.actionService.pipe(ofType(addFamille)).subscribe(() => {
        this.onCreateFamille();
        this.modalService.dismissAll();
        this.loadingOperation$.next(false);
        this.loadFamilles();
      }),
      this.actionService.pipe(ofType(dellFamille)).subscribe(() => {
        this.onCreateFamille();
        this.loadFamilles();
      })
    )
  }

  onCreateFamille(): void {
    this.loadingOperation$.next(false);
    this.operationFamille$.next({operation: OperationEnum.CREATE, famille: {}});
  }

  onEditFamille(famille: Famille): void {
    this.loadingOperation$.next(false);
    this.operationFamille$.next({operation: OperationEnum.UPDATE, famille: famille});
  }

  loadFamilles(): void {
    this.familles = [];
    setTimeout(() => {
      this.store.select(selectFamilleState).pipe().subscribe( (data) => {
        this.familles = data.familles;
      }
    )
    }, 1000);
  }
  delleteFamille(idFamille: any): void {
    this.store.dispatch(deleteFamille({idFamille: idFamille}));
  }

  detailFamille(templateView: TemplateRef<any>, famille: Famille){
    this.famille$.next(famille);
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionFamille($event: {action: TypeActionEnum, famille: Famille}){
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteFamille({idFamille: $event.famille.id}));
    } else {
      this.store.dispatch(updateFamille({famille: $event.famille}));
    }
  }
}
