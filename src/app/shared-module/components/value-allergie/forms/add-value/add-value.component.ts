import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { createAllergieValue, updateAllergieValue } from 'src/app/core/ngrx/allergie-value/allergie-value.actions';
import { AllergieValue } from 'src/app/core/shared/models/allergie-value.modal';

@Component({
  selector: 'health-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.scss']
})
export class AddValueComponent implements OnInit {

//   @Input() valueAllergie$!: BehaviorSubject<{operation: string, valueAllergie: AllergieValue}>;
//   @Input() loading$!: BehaviorSubject<boolean>;
//   valueAllergieForm!: FormGroup;
//   isvalueAllergieSubmitted: boolean = false;
//   operation: string = OperationEnum.CREATE;
//   operationEnum: typeof OperationEnum = OperationEnum;

//   constructor(
//     private store: Store,
//     private formBuilder: FormBuilder,
//   ) { }

  ngOnInit(): void {
    // this.initCreatevalueAllergie();
    // this.valueAllergie$.subscribe(data => {
    //   this.isvalueAllergieSubmitted = false;
    //   this.operation = data.operation;
    //   if(data.operation == OperationEnum.CREATE) {
    //     this.initCreatevalueAllergie();
    //   } else {
    //     this.initEditvalueAllergie(data.valueAllergie);
    //   }
    // });
  }

//   get valueAllergie(){ return this.valueAllergieForm.controls; }

//   initCreatevalueAllergie(): void {
//     this.valueAllergieForm = this.formBuilder.group({
//       libelleEn: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
//       libelleFr: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
//     })
//   }

//   initEditvalueAllergie(valueAllergie: AllergieValue): void {
//     this.valueAllergieForm = this.formBuilder.group({
//       id: valueAllergie.id,
//       libelleEn: [valueAllergie.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
//       libelleFr: [valueAllergie.libelleEn, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])]

//     })
//   }

//   createvalueAllergie(): void {
//     this.isvalueAllergieSubmitted = true;
//     if(this.valueAllergieForm.invalid)  {
//       return;
//     } else {
//       this.loading$.next(true);
//       if(this.operation == OperationEnum.CREATE) {
//         this.store.dispatch(createAllergieValue({allergieValue: this.valueAllergieForm.value}));
//       } else {
//         this.store.dispatch(updateAllergieValue({allergieValue: this.valueAllergieForm.value}));
//       }
//     }
//   }
}

