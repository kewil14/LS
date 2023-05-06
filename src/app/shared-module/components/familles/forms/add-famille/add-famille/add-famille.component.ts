import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createFamille, updateFamille } from 'src/app/core/ngrx/famille/famille.actions';
import { Famille } from 'src/app/core/shared/models/famille.modal';

@Component({
  selector: 'health-add-famille',
  templateUrl: './add-famille.component.html',
  styleUrls: ['./add-famille.component.css']
})
export class AddFamilleComponent implements OnInit {

  @Input() famille$!: BehaviorSubject<{operation: string, famille: Famille}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  familleForm!: FormGroup;
  isFamilleSubmitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initCreateFamille();
    this.famille$.subscribe(data => {
      this.isFamilleSubmitted = false;
      this.operation = data.operation;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateFamille();
      } else {
        this.initEditFamille(data.famille);
      }
    });
  }

  get famille(){ return this.familleForm.controls; }

  initCreateFamille(): void {
    this.familleForm = this.formBuilder.group({
      libelle: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  initEditFamille(famille: Famille): void {
    this.familleForm = this.formBuilder.group({
      id: famille.id,
      libelle: [famille.libelle, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    })
  }

  createFamille(): void {
    this.isFamilleSubmitted = true;
    if(this.familleForm.invalid)  {
      return;
    } else {
      this.loading$.next(true);
      if(this.operation == 'add') {
        this.store.dispatch(createFamille({famille: this.familleForm.value}));
      } else {
        this.store.dispatch(updateFamille({famille: this.familleForm.value}));
      }
    }
  }
}
