import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_ENUMS, APP_STATUS } from 'src/app/core/config/app.enums.config';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
import { RoleService } from 'src/app/core/shared/services/services-role/role.service';

@Component({
  selector: 'health-current-authorities',
  templateUrl: './current-authorities.component.html',
  styleUrls: ['./current-authorities.component.scss']
})
export class CurrentAuthoritiesComponent implements OnInit {

  @Input() authorities$!:BehaviorSubject<Role[]>
  @Input() role$!: BehaviorSubject<{}>
  authorityForm!: FormGroup;
  submitted: boolean = false;
  operation: string = OperationEnum.CREATE;
  operationEnum: typeof OperationEnum = OperationEnum;
  lang: string = APP_ENUMS.PREFIX_DEFAULT_LANGUAGE;
  appEnums: typeof APP_ENUMS = APP_ENUMS;
  appStatus: typeof APP_STATUS = APP_STATUS;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storeService: Store,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCreateAuthority();
  }

  get authority(){ return this.authorityForm.controls; }

  initCreateAuthority(): void {
    this.authorityForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.min(0)])],
    })
  }

  initEditAuthority(authority: Role): void {
    this.authorityForm = this.formBuilder.group({
      name: authority.name,
    })
  }

  
}
