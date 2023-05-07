import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeLaboratoireState } from 'src/app/core/core.state';
import { createLaboratoireValue, updateLaboratoireValue } from 'src/app/core/ngrx/laboratoire-value/laboratoire-value.actions';
import { LaboratoireValue } from 'src/app/core/shared/models/laboratoire-value.modal';
import { TypeLaboratoire } from 'src/app/core/shared/models/type-laboratoire.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-add-laboratoire-value',
  templateUrl: './add-laboratoire-value.component.html',
  styleUrls: ['./add-laboratoire-value.component.scss']
})
export class AddLaboratoireValueComponent implements OnInit {

  @Input() laboratoireValue$!: BehaviorSubject<{operation: string, laboratoireValue: LaboratoireValue}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  laboratoireValueForm!: FormGroup;
  isLaboratoireValueSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  typeLaboratoires$!: Observable<Array<TypeLaboratoire>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateLaboratoireValue();
    this.typeLaboratoires$ = this.storeService.select(selectTypeLaboratoireState).pipe(map(({typeLaboratoires}) => typeLaboratoires));
    this.lang = this.localStorageService.localLangValue;

    this.laboratoireValue$.subscribe(data => {
      this.isLaboratoireValueSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateLaboratoireValue();
      } else {
        this.initEditLaboratoireValue(data.laboratoireValue);
      }
    });
  }

  get laboratoireValue(){ return this.laboratoireValueForm.controls; }

  initCreateLaboratoireValue(): void {
    this.laboratoireValueForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditLaboratoireValue(laboratoireValue: LaboratoireValue): void {
    this.laboratoireValueForm = this.formBuilder.group({
      id: laboratoireValue.id,
      libelleFr: [laboratoireValue.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [laboratoireValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [laboratoireValue.type?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createLaboratoireValue(): void {
    this.isLaboratoireValueSubmitted = true;
    if(this.laboratoireValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createLaboratoireValue({laboratoireValue: this.laboratoireValueForm.value, idType: this.laboratoireValueForm.value.idType}));
      } else {
        this.store.dispatch(updateLaboratoireValue({laboratoireValue: this.laboratoireValueForm.value}));
      }
    }
  }
}