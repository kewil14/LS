import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS, APP_STATUS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectCategorieState, selectFormeState } from 'src/app/core/core.state';
import { createProduit, updateProduit } from 'src/app/core/ngrx/produit/produit.actions';
import { Categorie } from 'src/app/core/shared/models/categorie.modal';
import { Forme } from 'src/app/core/shared/models/forme.modal';
import { Produit } from 'src/app/core/shared/models/produit.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
@Component({
  selector: 'health-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.scss']
})
export class AddMedicamentComponent implements OnInit {

  @Input() produit$!: BehaviorSubject<{operation: string, produit: Produit}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  produitForm!: FormGroup;
  isProduitSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  categories$!: Observable<Array<Categorie>>;
  formes$!: Observable<Array<Forme>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;
  appStatus: typeof APP_STATUS = APP_STATUS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateProduit();
    this.categories$ = this.storeService.select(selectCategorieState).pipe(map(({categories}) => categories));
    this.formes$ = this.storeService.select(selectFormeState).pipe(map(({formes}) => formes));
    this.lang = this.localStorageService.localLangValue;

    this.produit$.subscribe(data => {
      this.isProduitSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateProduit();
      } else {
        this.initEditProduit(data.produit);
      }
    });
  }

  get produit(){ return this.produitForm.controls; }

  initCreateProduit(): void {
    this.produitForm = this.formBuilder.group({
      libelle: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      dosage: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      ordonnance: [APP_STATUS.STATUS_ORDONNANCE_UNREQUIRED, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      description: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idCategorie: [null, Validators.compose([Validators.required, Validators.min(0)])],
      idForme: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditProduit(produit: Produit): void {
    this.produitForm = this.formBuilder.group({
      id: produit.id,
      libelle: [produit?.libelle, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      dosage: [produit?.dosage, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      ordonnance: [produit?.ordonnance, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      description: [produit?.description, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idCategorie: [produit?.categorie?.id, Validators.compose([Validators.required, Validators.min(0)])],
      idForme: [produit?.forme?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createProduit(): void {
    this.isProduitSubmitted = true;
    if(this.produitForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createProduit({produit: this.produitForm.value, idCategorie: this.produitForm.value.idCategorie, idForme: this.produitForm.value.idForme}));
      } else {
        this.store.dispatch(updateProduit({produit: this.produitForm.value, idCategorie: this.produitForm.value.idCategorie, idForme: this.produitForm.value.idForme}));
      }
    }
  }
}