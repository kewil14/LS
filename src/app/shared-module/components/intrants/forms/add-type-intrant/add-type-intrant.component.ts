import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createTypeIntrant, updateTypeIntrant } from 'src/app/core/ngrx/type-intrant/type-intrant.actions';
import { TypeIntrant } from 'src/app/core/shared/models/type-intrant.modal';

@Component({
  selector: 'health-add-type-intrant',
  templateUrl: './add-type-intrant.component.html',
  styleUrls: ['./add-type-intrant.component.scss']
})
export class AddTypeIntrantComponent implements OnInit {

  @Input() typeIntrant$!: BehaviorSubject<{operation: string, typeIntrant: TypeIntrant}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  typeIntrantForm!: FormGroup;
  isTypeIntrantSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateTypeIntrant();
    this.typeIntrant$.subscribe(data => {
      this.isTypeIntrantSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTypeIntrant();
      } else {
        this.initEditTypeIntrant(data.typeIntrant);
      }
    });
  }

  get typeIntrant(){ return this.typeIntrantForm.controls; }

  initCreateTypeIntrant(): void {
    this.typeIntrantForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditTypeIntrant(typeIntrant: TypeIntrant): void {
    this.typeIntrantForm = this.formBuilder.group({
      id: typeIntrant.id,
      libelleFr: [typeIntrant.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [typeIntrant.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createTypeIntrant(): void {
    this.isTypeIntrantSubmitted = true;
    if(this.typeIntrantForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTypeIntrant({typeIntrant: this.typeIntrantForm.value}));
      } else {
        this.store.dispatch(updateTypeIntrant({typeIntrant: this.typeIntrantForm.value}));
      }
    }
  }
}