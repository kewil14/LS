import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeInstitutionEnum } from 'src/app/core/shared/enums/TypeInstitutionEnum';

@Component({
  selector: 'health-form-create-institution',
  templateUrl: './form-create-institution.component.html',
  styleUrls: ['./form-create-institution.component.scss']
})
export class FormCreateInstitutionComponent implements OnInit {
  
  selectInstitutionForm!: FormGroup;
  isSUbmitted: boolean = false;
  @Output() onSelectType = new EventEmitter<{type: TypeInstitutionEnum}>();

  listTypeInstitution: Array<TypeInstitutionEnum> = [];

  constructor(
    private fb: FormBuilder
  ) {}

  get selectInstitution() { return this.selectInstitutionForm.controls; }

  ngOnInit(): void {
    this.selectInstitutionForm = this.fb.group({
      type: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  selectType(): void {
    this.isSUbmitted = true;
    if(this.selectInstitutionForm.invalid) return;
    this.onSelectType.emit({type: this.selectInstitutionForm.value.type})
  }
}
