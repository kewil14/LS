import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectDciState } from 'src/app/core/core.state';
import { addDci, deleteDci, dellDci, erreurDcis, setDci, updateDci } from 'src/app/core/ngrx/dci/dci.actions';
import { DciState } from 'src/app/core/ngrx/dci/dci.state';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Dci } from 'src/app/core/shared/models/dci.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'app-dci',
  templateUrl: './dci.component.html',
  styleUrls: ['./dci.component.scss']
})
export class DciComponent  implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  dcis$!: Observable<DciState>;
  operationDci$ = new BehaviorSubject<{operation: string, Dci: Dci}>({operation: OperationEnum.CREATE, Dci: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  dcis: Array<Dci> = [];
  currentDci!: Dci;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  dci$ = new BehaviorSubject<Dci>({});
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
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
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
        this.modalService.dismissAll();
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

  detailDci(templateView: TemplateRef<any>, dci: Dci){
    this.dci$.next(dci);
    this.titleModal$.next('Detail Dci');
    this.modalService.open(templateView, { size: 'md', centered: true });
  }

  actionDci($event: {action: TypeActionEnum, dci: Dci}){
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteDci({idDci: $event.dci.id}));
    } else {
      this.store.dispatch(updateDci({dci: $event.dci}));
    }
  }
}
 
