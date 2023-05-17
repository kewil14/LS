import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeTraitment, updateTypeTraitment } from 'src/app/core/ngrx/type-traitment/type-traitment.actions';
import { TypeTraitment } from 'src/app/core/shared/models/type-traitment.modal';

@Component({
  selector: 'health-add-type-traitement',
  templateUrl: './add-type-traitement.component.html',
  styleUrls: ['./add-type-traitement.component.scss']
})
export class AddTypeTraitementComponent implements OnInit {

  @Input() typeTraitment$!: BehaviorSubject<{operation: string, typeTraitment: TypeTraitment}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeTraitmentForm!: FormGroup;
  isTypeTraitmentSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateTypeTraitment();
    this.typeTraitment$.subscribe(data => {
      this.isTypeTraitmentSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTypeTraitment();
      } else {
        this.initEditTypeTraitment(data.typeTraitment);
      }
    });
  }

  get typeTraitment(){ return this.typeTraitmentForm.controls; }

  initCreateTypeTraitment(): void {
    this.typeTraitmentForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditTypeTraitment(typeTraitment: TypeTraitment): void {
    this.typeTraitmentForm = this.formBuilder.group({
      id: typeTraitment.id,
      libelleFr: [typeTraitment.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [typeTraitment.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createTypeTraitment(): void {
    this.isTypeTraitmentSubmitted = true;
    if(this.typeTraitmentForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeTraitment({typeTraitment: this.typeTraitmentForm.value}));
      } else {
        this.store.dispatch(updateTypeTraitment({typeTraitment: this.typeTraitmentForm.value}));
      }
    }
  }
}
