import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createAntecedentValue, updateAntecedentValue } from 'src/app/core/ngrx/antecedent-value/antecedent-value.actions';
import { AntecedentValue } from 'src/app/core/shared/models/antecedent-value.modal';

@Component({
  selector: 'health-add-antecedent-value',
  templateUrl: './add-antecedent-value.component.html',
  styleUrls: ['./add-antecedent-value.component.scss']
})
export class AddAntecedentValueComponent implements OnInit {

  @Input() antecedentValue$!: BehaviorSubject<{operation: string, antecedentValue: AntecedentValue}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  antecedentValueForm!: FormGroup;
  isAntecedentValueSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  idType!: any;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateAntecedentValue();
    this.antecedentValue$.subscribe(data => {
      this.isAntecedentValueSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateAntecedentValue();
      } else {
        this.initEditAntecedentValue(data.antecedentValue);
      }
    });
  }

  get antecedentValue(){ return this.antecedentValueForm.controls; }

  initCreateAntecedentValue(): void {
    this.antecedentValueForm = this.formBuilder.group({
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]    })
  }

  initEditAntecedentValue(antecedentValue: AntecedentValue): void {
    this.antecedentValueForm = this.formBuilder.group({
      id: antecedentValue.id,
      libelleEn: [antecedentValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleFr: [antecedentValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createAntecedentValue(): void {
    this.isAntecedentValueSubmitted = true;
    if(this.antecedentValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createAntecedentValue({antecedentValue: this.antecedentValueForm.value, idType: this.idType}));
      } else {
        this.store.dispatch(updateAntecedentValue({antecedentValue: this.antecedentValueForm.value}));
      }
    }
  }

}
