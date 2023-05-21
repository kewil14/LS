import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeInstitutionEnum } from 'src/app/core/shared/enums/TypeInstitutionEnum';

@Component({
  selector: 'health-select-institution',
  templateUrl: './select-institution.component.html',
  styleUrls: ['./select-institution.component.scss']
})
export class SelectInstitutionComponent  implements OnInit {
  
  selectInstitutionForm!: FormGroup;
  isSUbmitted: boolean = false;
  @Output() onSelectType = new EventEmitter<{type: TypeInstitutionEnum}>();

  listTypeInstitution: Array<TypeInstitutionEnum> = [TypeInstitutionEnum.INSTITUTION_ASSURANCE, TypeInstitutionEnum.INSTITUTION_COMMUNE, TypeInstitutionEnum.INSTITUTION_HOPI, TypeInstitutionEnum.INSTITUTION_PHARMA];

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
