import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeLaboratoire, updateTypeLaboratoire } from 'src/app/core/ngrx/type-laboratoire/type-laboratoire.actions';
import { TypeLaboratoire } from 'src/app/core/shared/models/type-laboratoire.modal';

@Component({
  selector: 'health-add-type-laboratoire',
  templateUrl: './add-type-laboratoire.component.html',
  styleUrls: ['./add-type-laboratoire.component.scss']
})
export class AddTypeLaboratoireComponent implements OnInit {

  @Input() typeLaboratoire$!: BehaviorSubject<{operation: string, typeLaboratoire: TypeLaboratoire}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeLaboratoireForm!: FormGroup;
  isTypeLaboratoireSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateTypeLaboratoire();
    this.typeLaboratoire$.subscribe(data => {
      this.isTypeLaboratoireSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTypeLaboratoire();
      } else {
        this.initEditTypeLaboratoire(data.typeLaboratoire);
      }
    });
  }

  get typeLaboratoire(){ return this.typeLaboratoireForm.controls; }

  initCreateTypeLaboratoire(): void {
    this.typeLaboratoireForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditTypeLaboratoire(typeLaboratoire: TypeLaboratoire): void {
    this.typeLaboratoireForm = this.formBuilder.group({
      id: typeLaboratoire.id,
      libelleFr: [typeLaboratoire.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [typeLaboratoire.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createTypeLaboratoire(): void {
    this.isTypeLaboratoireSubmitted = true;
    if(this.typeLaboratoireForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeLaboratoire({typeLaboratoire: this.typeLaboratoireForm.value}));
      } else {
        this.store.dispatch(updateTypeLaboratoire({typeLaboratoire: this.typeLaboratoireForm.value}));
      }
    }
  }
}
