import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { APP_ENUMS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectTypeIntrantState } from 'src/app/core/core.state';
import { createIntrantValue, updateIntrantValue } from 'src/app/core/ngrx/intrant-value/intrant-value.actions';
import { IntrantValue } from 'src/app/core/shared/models/intrant-value.modal';
import { TypeIntrant } from 'src/app/core/shared/models/type-intrant.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';


@Component({
  selector: 'health-add-intrant-value',
  templateUrl: './add-intrant-value.component.html',
  styleUrls: ['./add-intrant-value.component.scss']
})
export class AddIntrantValueComponent implements OnInit {

  @Input() intrantValue$!: BehaviorSubject<{operation: string, intrantValue: IntrantValue}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  intrantValueForm!: FormGroup;
  isIntrantValueSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  typeIntrants$!: Observable<Array<TypeIntrant>>;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateIntrantValue();
    this.typeIntrants$ = this.storeService.select(selectTypeIntrantState).pipe(map(({typeIntrants}) => typeIntrants));
    this.lang = this.localStorageService.localLangValue;

    this.intrantValue$.subscribe(data => {
      this.isIntrantValueSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateIntrantValue();
      } else {
        this.initEditIntrantValue(data.intrantValue);
      }
    });
  }

  get intrantValue(){ return this.intrantValueForm.controls; }

  initCreateIntrantValue(): void {
    this.intrantValueForm = this.formBuilder.group({
      libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [null, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  initEditIntrantValue(intrantValue: IntrantValue): void {
    this.intrantValueForm = this.formBuilder.group({
      id: intrantValue.id,
      libelleFr: [intrantValue.libelleFr, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      libelleEn: [intrantValue.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      idType: [intrantValue.type?.id, Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  createIntrantValue(): void {
    this.isIntrantValueSubmitted = true;
    if(this.intrantValueForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createIntrantValue({intrantValue: this.intrantValueForm.value, idType: this.intrantValueForm.value.idType}));
      } else {
        this.store.dispatch(updateIntrantValue({intrantValue: this.intrantValueForm.value}));
      }
    }
  }
}