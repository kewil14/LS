import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeAllergie, updateTypeAllergie } from 'src/app/core/ngrx/type-allergie/type-allergie.actions';
import { TypeAllergie } from 'src/app/core/shared/models/type-allergie.modal';

@Component({
  selector: 'health-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  @Input() typeAllergie$!: BehaviorSubject<{operation: string, typeAllergie: TypeAllergie}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeAllergieForm!: FormGroup;
  istypeAllergieSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreatetypeAllergie();
    this.typeAllergie$.subscribe(data => {
      this.istypeAllergieSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreatetypeAllergie();
      } else {
        this.initEdittypeAllergie(data.typeAllergie);
      }
    });
  }

  get typeAllergie(){ return this.typeAllergieForm.controls; }

  initCreatetypeAllergie(): void {
    this.typeAllergieForm = this.formBuilder.group({
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEdittypeAllergie(typeAllergie: TypeAllergie): void {
    this.typeAllergieForm = this.formBuilder.group({
      id: typeAllergie.id,
      libelleEn: [typeAllergie.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [typeAllergie.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]

    })
  }

  createTypeAllergie(): void {
    this.istypeAllergieSubmitted = true;
    if(this.typeAllergieForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeAllergie({typeAllergie: this.typeAllergieForm.value}));
      } else {
        this.store.dispatch(updateTypeAllergie({typeAllergie: this.typeAllergieForm.value}));
      }
    }
  }
}

