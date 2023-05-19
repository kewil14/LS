import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum } from 'src/app/core/config/data.state.enum';
import { selectFormeState } from 'src/app/core/core.state';
import { addForme, deleteForme,updateForme, dellForme, erreurFormes, setForme } from 'src/app/core/ngrx/forme/forme.actions';
import { FormeState } from 'src/app/core/ngrx/forme/forme.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Forme } from 'src/app/core/shared/models/forme.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'app-formes',
  templateUrl: './formes.component.html',
  styleUrls: ['./formes.component.scss']
})
export class FormesComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  formes$!: Observable<FormeState>;
  operationForme$ = new BehaviorSubject<{operation: string, forme: Forme}>({operation: 'add', forme: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  formes: Array<Forme> = [];
  currentForme!: Forme;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});

  forme$ = new BehaviorSubject<Forme>({});
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
    this.formes$ = this.store.select(selectFormeState).pipe();
    this.loadFormes();
    this.onCreateForme();

    this.onActionFormes();
  }

  private onActionFormes(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurFormes)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setForme)
      ).subscribe(() => {
        this.onCreateForme();
        this.modalService.dismissAll();
        this.loadingOperation$.next(false);
        this.loadFormes();
      }),
      this.actionService.pipe(ofType(addForme)).subscribe(() => {
        this.onCreateForme();
        this.loadingOperation$.next(false);
        this.loadFormes();
      }),
      this.actionService.pipe(ofType(dellForme)).subscribe(() => {
        this.onCreateForme();
        this.loadFormes();
      })
    )
  }

  onCreateForme(): void {
    this.loadingOperation$.next(false);
    this.operationForme$.next({operation: 'add', forme: {}});
  }

  onEditForme(forme: Forme): void {
    this.loadingOperation$.next(false);
    this.operationForme$.next({operation: 'edit', forme: forme});
  }

  loadFormes(): void {
    this.formes = [];
    setTimeout(() => {
      this.store.select(selectFormeState).pipe().subscribe( (data) => {
        this.formes = data.formes;
      }
    )
    }, 1000);
  }
  delleteForme(idForme: any): void {
    this.store.dispatch(deleteForme({idForme: idForme}));
  }

  detailForme(templateView: TemplateRef<any>, forme: Forme){
    this.forme$.next(forme);
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionForme($event:{action: TypeActionEnum, forme: Forme}): void {
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteForme({idForme: $event.forme.id}));
    } else {
      this.store.dispatch(updateForme({forme: $event.forme}));
    }
  }
}
