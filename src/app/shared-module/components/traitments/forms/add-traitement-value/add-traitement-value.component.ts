import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeTraitmentState } from 'src/app/core/core.state';
import { createTraitmentValue, updateTraitmentValue } from 'src/app/core/ngrx/traitment-value/traitment-value.actions';
import { TraitmentValue } from 'src/app/core/shared/models/traitment-value.modal';
import { TypeTraitment } from 'src/app/core/shared/models/type-traitment.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-add-traitement-value',
  templateUrl: './add-traitement-value.component.html',
  styleUrls: ['./add-traitement-value.component.scss']
})
export class AddTraitementValueComponent implements OnInit {

  @Input() traitmentValue$!: BehaviorSubject<{operation: string, traitmentValue: TraitmentValue}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  traitmentValueForm!: FormGroup;
  isTraitmentValueSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  typeTraitments$!: Observable<Array<TypeTraitment>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateTraitmentValue();
    this.typeTraitments$ = this.storeService.select(selectTypeTraitmentState).pipe(map(({typeTraitments}) => typeTraitments));
    this.lang = this.localStorageService.localLangValue;

    this.traitmentValue$.subscribe(data => {
      this.isTraitmentValueSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateTraitmentValue();
      } else {
        this.initEditTraitmentValue(data.traitmentValue);
      }
    });
  }

  get traitmentValue(){ return this.traitmentValueForm.controls; }

  initCreateTraitmentValue(): void {
    this.traitmentValueForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      descriptionFr: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      descriptionEn: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      idType: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditTraitmentValue(traitmentValue: TraitmentValue): void {
    this.traitmentValueForm = this.formBuilder.group({
      id: traitmentValue.id,
      libelleFr: [traitmentValue.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [traitmentValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      descriptionFr: [traitmentValue.descriptionFr, Validators.compose([Validators.required, Validators.minLength(2)])],
      descriptionEn: [traitmentValue.descriptionEn, Validators.compose([Validators.required, Validators.minLength(2)])],
      idType: [traitmentValue.type?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createTraitmentValue(): void {
    this.isTraitmentValueSubmitted = true;
    if(this.traitmentValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createTraitmentValue({traitmentValue: this.traitmentValueForm.value, idType: this.traitmentValueForm.value.idType}));
      } else {
        this.store.dispatch(updateTraitmentValue({traitmentValue: this.traitmentValueForm.value}));
      }
    }
  }
}