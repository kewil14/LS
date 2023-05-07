import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeRadio, updateTypeRadio } from 'src/app/core/ngrx/type-radio/type-radio.actions';
import { TypeRadio } from 'src/app/core/shared/models/type-radio.modal';

@Component({
  selector: 'health-add-type-radio',
  templateUrl: './add-type-radio.component.html',
  styleUrls: ['./add-type-radio.component.scss']
})
export class AddTypeRadioComponent implements OnInit {

  @Input() typeRadio$!: BehaviorSubject<{operation: string, typeRadio: TypeRadio}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeRadioForm!: FormGroup;
  isTypeRadioSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateTypeRadio();
    this.typeRadio$.subscribe(data => {
      this.isTypeRadioSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTypeRadio();
      } else {
        this.initEditTypeRadio(data.typeRadio);
      }
    });
  }

  get typeRadio(){ return this.typeRadioForm.controls; }

  initCreateTypeRadio(): void {
    this.typeRadioForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditTypeRadio(typeRadio: TypeRadio): void {
    this.typeRadioForm = this.formBuilder.group({
      id: typeRadio.id,
      libelleFr: [typeRadio.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [typeRadio.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createTypeRadio(): void {
    this.isTypeRadioSubmitted = true;
    if(this.typeRadioForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeRadio({typeRadio: this.typeRadioForm.value}));
      } else {
        this.store.dispatch(updateTypeRadio({typeRadio: this.typeRadioForm.value}));
      }
    }
  }

}
