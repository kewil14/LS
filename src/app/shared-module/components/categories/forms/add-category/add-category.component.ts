import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createCategorie, updateCategorie } from 'src/app/core/ngrx/categorie/categorie.actions';
import { Categorie } from 'src/app/core/shared/models/categorie.modal';

@Component({
  selector: 'health-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Input() categorie$!: BehaviorSubject<{operation: string, categorie: Categorie}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  categorieForm!: FormGroup;
  isCategorieSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateCategorie();
    this.categorie$.subscribe(data => {
      this.isCategorieSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateCategorie();
      } else {
        this.initEditCategorie(data.categorie);
      }
    });
  }

  get categorie(){ return this.categorieForm.controls; }

  initCreateCategorie(): void {
    this.categorieForm = this.formBuilder.group({
      libelle: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditCategorie(categorie: Categorie): void {
    this.categorieForm = this.formBuilder.group({
      id: categorie.id,
      libelle: [categorie.libelle, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createCategorie(): void {
    this.isCategorieSubmitted = true;
    if(this.categorieForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createCategorie({categorie: this.categorieForm.value}));
      } else {
        this.store.dispatch(updateCategorie({categorie: this.categorieForm.value}));
      }
    }
  }
}