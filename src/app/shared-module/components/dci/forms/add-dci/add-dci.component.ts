import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createDci, updateDci } from 'src/app/core/ngrx/dci/dci.actions';
import { Dci } from 'src/app/core/shared/models/dci.modal';

@Component({
  selector: 'app-add-dci',
  templateUrl: './add-dci.component.html',
  styleUrls: ['./add-dci.component.scss']
})
export class AddDciComponent implements OnInit {

  @Input() dci$!: BehaviorSubject<{operation: string, Dci: Dci}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  dciForm!: FormGroup;
  isdciSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreatedci();
    this.dci$.subscribe(data => {
      this.isdciSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreatedci();
      } else {
        this.initEditdci(data.Dci);
      }
    });
  }

  get dci(){ return this.dciForm.controls; }

  initCreatedci(): void {
    this.dciForm = this.formBuilder.group({
      libelle: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditdci(dci: Dci): void {
    this.dciForm = this.formBuilder.group({
      id: dci.id,
      libelle: [dci.libelle, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createdci(): void {
    this.isdciSubmitted = true;
    if(this.dciForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == OperationEnum.CREATE) {
        this.store.dispatch(createDci({dci: this.dciForm.value}));
      } else {
        this.store.dispatch(updateDci({dci: this.dciForm.value}));
      }
    }
  }
}
