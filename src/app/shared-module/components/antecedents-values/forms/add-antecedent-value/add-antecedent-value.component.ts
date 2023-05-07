import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeAntecedentState } from 'src/app/core/core.state';
import { createAntecedentValue, updateAntecedentValue } from 'src/app/core/ngrx/antecedent-value/antecedent-value.actions';
import { AntecedentValue } from 'src/app/core/shared/models/antecedent-value.modal';
import { TypeAntecedent } from 'src/app/core/shared/models/type-antecedent.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';


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
  typeAntecedents$!: Observable<Array<TypeAntecedent>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateAntecedentValue();
    this.typeAntecedents$ = this.storeService.select(selectTypeAntecedentState).pipe(map(({typeAntecedents}) => typeAntecedents));
    this.lang = this.localStorageService.localLangValue;

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
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditAntecedentValue(antecedentValue: AntecedentValue): void {
    this.antecedentValueForm = this.formBuilder.group({
      id: antecedentValue.id,
      libelleFr: [antecedentValue.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [antecedentValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [antecedentValue.type?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createAntecedentValue(): void {
    this.isAntecedentValueSubmitted = true;
    if(this.antecedentValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createAntecedentValue({antecedentValue: this.antecedentValueForm.value, idType: this.antecedentValueForm.value.idType}));
      } else {
        this.store.dispatch(updateAntecedentValue({antecedentValue: this.antecedentValueForm.value}));
      }
    }
  }
}
