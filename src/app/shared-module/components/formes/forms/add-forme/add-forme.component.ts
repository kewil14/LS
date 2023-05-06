import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createForme, updateForme } from 'src/app/core/ngrx/forme/forme.actions';
import { Forme } from 'src/app/core/shared/models/forme.modal';

@Component({
  selector: 'health-add-forme',
  templateUrl: './add-forme.component.html',
  styleUrls: ['./add-forme.component.scss']
})
export class AddFormeComponent implements OnInit {

  @Input() forme$!: BehaviorSubject<{operation: string, forme: Forme}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  formeForm!: FormGroup;
  isFormeSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateForme();
    this.forme$.subscribe(data => {
      this.isFormeSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateForme();
      } else {
        this.initEditForme(data.forme);
      }
    });
  }

  get forme(){ return this.formeForm.controls; }

  initCreateForme(): void {
    this.formeForm = this.formBuilder.group({
      libelle: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditForme(forme: Forme): void {
    this.formeForm = this.formBuilder.group({
      id: forme.id,
      libelle: [forme.libelle, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createForme(): void {
    this.isFormeSubmitted = true;
    if(this.formeForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == 'add') {
        this.store.dispatch(createForme({forme: this.formeForm.value}));
      } else {
        this.store.dispatch(updateForme({forme: this.formeForm.value}));
      }
    }
  }
}