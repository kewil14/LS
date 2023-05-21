import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectProduitState } from 'src/app/core/core.state';
import { addProduit, deleteProduit, dellProduit, erreurProduits, findProduitById, setProduit, updateProduit } from 'src/app/core/ngrx/produit/produit.actions';
import { ProduitState } from 'src/app/core/ngrx/produit/produit.state';
import { Produit } from 'src/app/core/shared/models/produit.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';

@Component({
  selector: 'health-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss']
})
export class ListProduitsComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: DataTables.Settings = {};
  produits$!: Observable<ProduitState>;
  operationProduit$ = new BehaviorSubject<{operation: string, produit: Produit}>({operation: OperationEnum.CREATE, produit: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  produits: Array<Produit> = [];
  currentProduit$= new BehaviorSubject<{ produit: Produit}>({ produit: {}});
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  medicament$ = new BehaviorSubject<Produit>({});
  loadingActivate$ = new BehaviorSubject<boolean>(false);
  loadingDelete$ =new BehaviorSubject<boolean>(false);
  title$= new BehaviorSubject<string>('');
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
    this.produits$ = this.store.select(selectProduitState).pipe();
    this.loadProduits();
    this.onCreateProduit();

    this.onActionProduits();
  }

  private onActionProduits(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurProduits)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setProduit)
      ).subscribe(() => {
        this.onCreateProduit();
        this.modalService.dismissAll();
        this.loadingOperation$.next(false);
        this.loadProduits();
      }),
      this.actionService.pipe(ofType(addProduit)).subscribe(() => {
        this.onCreateProduit();
        this.loadingDelete$.next(false);
        this.loadingActivate$.next(false);
        this.loadingOperation$.next(false);
        this.loadProduits();
      }),
      this.actionService.pipe(ofType(dellProduit)).subscribe(() => {
        this.onCreateProduit();
        this.loadProduits();
      })
    )
  }

  onCreateProduit(): void {
    this.loadingOperation$.next(false);
    this.operationProduit$.next({operation: OperationEnum.CREATE, produit: {}});
  }

  onEditProduit(produit: Produit): void {
    this.loadingOperation$.next(false);
    this.operationProduit$.next({operation: OperationEnum.UPDATE, produit: produit});
  }

  loadProduits(): void {
    this.produits = [];
    setTimeout(() => {
      this.store.select(selectProduitState).pipe().subscribe( (data) => {
        this.produits = data.produits;
      }
    )
    }, 1000);
  }

  detailMedicament(templateView: TemplateRef<any>, produit: Produit) {
    this.medicament$.next(produit);
    this.title$.next('Detail Medicament');
    this.modalService.open(templateView, { size: 'md', centered: true });
  }


  actionMedicament($event: {action: TypeActionEnum, medicament: Produit}): void {
    console.log($event);
    if($event.action == TypeActionEnum.DELETE) {
      this.store.dispatch(deleteProduit({idProduit: $event.medicament.id}));
    } else {
      this.store.dispatch(updateProduit({produit: $event.medicament, idCategorie: $event.medicament.categorie, idForme: $event.medicament.forme}));
    }
  }
 
}
