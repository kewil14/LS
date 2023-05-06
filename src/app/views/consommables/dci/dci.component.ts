import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectDciState } from 'src/app/core/core.state';
import { addDci, deleteDci, dellDci, erreurDcis, setDci } from 'src/app/core/ngrx/dci/dci.actions';
import { DciState } from 'src/app/core/ngrx/dci/dci.state';
import { Dci } from 'src/app/core/shared/models/dci.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'app-dci',
  templateUrl: './dci.component.html',
  styleUrls: ['./dci.component.scss']
})
export class DciComponent  implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  dcis$!: Observable<DciState>;
  operationDci$ = new BehaviorSubject<{operation: string, Dci: Dci}>({operation: OperationEnum.CREATE, Dci: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  dcis: Array<Dci> = [];
  currentDci!: Dci;
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
    this.dcis$ = this.store.select(selectDciState).pipe();
    this.loaddcis();
    this.onCreateDci();
    this.onActiondcis();
  }

  private onActiondcis(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurDcis)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setDci)
      ).subscribe(() => {
        this.onCreateDci();
        this.loadingOperation$.next(false);
        this.loaddcis();
      }),
      this.actionService.pipe(ofType(addDci)).subscribe(() => {
        this.onCreateDci();
        this.loadingOperation$.next(false);
        this.loaddcis();
      }),
      this.actionService.pipe(ofType(dellDci)).subscribe(() => {
        this.onCreateDci();
        this.loaddcis();
      })
    )
  }

  onCreateDci(): void {
    this.loadingOperation$.next(false);
    this.operationDci$.next({operation: OperationEnum.CREATE, Dci: {}});
  }

  onEditDci(Dci: Dci): void {
    this.loadingOperation$.next(false);
    this.operationDci$.next({operation: OperationEnum.UPDATE, Dci: Dci});
  }

  loaddcis(): void {
    this.dcis = [];
    setTimeout(() => {
      this.store.select(selectDciState).pipe().subscribe( (data) => {
        this.dcis = data.dcis;
      }
    )
    }, 1000);
  }
  delleteDci(idDci: any): void {
    this.store.dispatch(deleteDci({idDci: idDci}));
  }
}

