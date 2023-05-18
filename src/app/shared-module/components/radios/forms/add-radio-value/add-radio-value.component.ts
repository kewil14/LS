import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeRadioState } from 'src/app/core/core.state';
import { createRadioValue, updateRadioValue } from 'src/app/core/ngrx/radio-value/radio-value.actions';
import { RadioValue } from 'src/app/core/shared/models/radio-value.modal';
import { TypeRadio } from 'src/app/core/shared/models/type-radio.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-add-radio-value',
  templateUrl: './add-radio-value.component.html',
  styleUrls: ['./add-radio-value.component.scss']
})
export class AddRadioValueComponent implements OnInit {

  @Input() radioValue$!: BehaviorSubject<{operation: string, radioValue: RadioValue}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  radioValueForm!: FormGroup;
  isRadioValueSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  typeRadios$!: Observable<Array<TypeRadio>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateRadioValue();
    this.typeRadios$ = this.storeService.select(selectTypeRadioState).pipe(map(({typeRadios}) => typeRadios));
    this.lang = this.localStorageService.localLangValue;

    this.radioValue$.subscribe(data => {
      this.isRadioValueSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateRadioValue();
      } else {
        this.initEditRadioValue(data.radioValue);
      }
    });
  }

  get radioValue(){ return this.radioValueForm.controls; }

  initCreateRadioValue(): void {
    this.radioValueForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditRadioValue(radioValue: RadioValue): void {
    this.radioValueForm = this.formBuilder.group({
      id: radioValue.id,
      libelleFr: [radioValue.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [radioValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [radioValue.type?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createRadioValue(): void {
    this.isRadioValueSubmitted = true;
    if(this.radioValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createRadioValue({radioValue: this.radioValueForm.value, idType: this.radioValueForm.value.idType}));
      } else {
        this.store.dispatch(updateRadioValue({radioValue: this.radioValueForm.value}));
      }
    }
  }

}
