import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeAntecedent, updateTypeAntecedent } from 'src/app/core/ngrx/type-antecedent/type-antecedent.actions';
import { TypeAntecedent } from 'src/app/core/shared/models/type-antecedent.modal';

@Component({
  selector: 'health-add-type-antecedent',
  templateUrl: './add-type-antecedent.component.html',
  styleUrls: ['./add-type-antecedent.component.scss']
})
export class AddTypeAntecedentComponent implements OnInit {

  @Input() typeAntecedent$!: BehaviorSubject<{operation: string, typeAntecedent: TypeAntecedent}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeAntecedentForm!: FormGroup;
  isTypeAntecedentSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateTypeAntecedent();
    this.typeAntecedent$.subscribe(data => {
      this.isTypeAntecedentSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTypeAntecedent();
      } else {
        this.initEditTypeAntecedent(data.typeAntecedent);
      }
    });
  }

  get typeAntecedent(){ return this.typeAntecedentForm.controls; }

  initCreateTypeAntecedent(): void {
    this.typeAntecedentForm = this.formBuilder.group({
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditTypeAntecedent(typeAntecedent: TypeAntecedent): void {
    this.typeAntecedentForm = this.formBuilder.group({
      id: typeAntecedent.id,
      libelleEn: [typeAntecedent.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [typeAntecedent.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]    })
  }

  createTypeAntecedent(): void {
    this.isTypeAntecedentSubmitted = true;
    if(this.typeAntecedentForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeAntecedent({typeAntecedent: this.typeAntecedentForm.value}));
      } else {
        this.store.dispatch(updateTypeAntecedent({typeAntecedent: this.typeAntecedentForm.value}));
      }
    }
  }

}
