import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { Institution } from 'src/app/core/shared/models/modal-institution/institution.modal';


@Component({
  selector: 'health-form-create-institution',
  templateUrl: './form-create-institution.component.html',
  styleUrls: ['./form-create-institution.component.scss']
})
export class FormCreateInstitutionComponent implements OnInit {

  // @Input Institution$!: BehaviorSubject<{inst: Institution, operation: string}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  operation: string = OperationEnum.CREATE;
  institutionForm!: FormGroup;
  isInstitutionFormSubmitted = false;

  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.initCreateInstitutionForm();
  }

  get institution() { return this.institutionForm.controls; }

  initCreateInstitutionForm(): void {
    this.institutionForm = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      code: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      category: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      site: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      statut: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      description: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      email: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      logo:[null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      district: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.email])],
      department: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      region: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      lattitude: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      longitude: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      type: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])]
    })
  }
  editInstitutionForm(inst: Institution): void {
    this.institutionForm = this.fb.group({
      name: [inst.name, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      code: [inst.code, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      category: [inst.category, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      phone: [inst.phoneNumber, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      site: [inst.siteWeb, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      statut: [inst.status, [Validators.nullValidator]],
      description: [inst.description, [Validators.nullValidator]],
      email: [inst.email, [Validators.nullValidator]],
      logo: [inst.logo, [Validators.nullValidator]],
      quartier: [inst.quarterCode, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.email])],
      district: [inst.districtCode, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      department: [inst.departmentCode, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      region: [inst.regionCode, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      lattitude: [inst.lattitude, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      longitude: [inst.longitude, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      type: [inst.type, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])]
      })
    } 

    constructInstitution(){
      
    }
  } 
 

