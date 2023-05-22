import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';

@Component({
  selector: 'health-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  @Input() role$!: BehaviorSubject<{role: Role, operation: string}>;
  @Input() loading$!: BehaviorSubject<boolean>;
  @Input() authorities$!: BehaviorSubject<Role[]>;
  @Output() onRole = new EventEmitter<{role: Role, operation: string}>();
  roleForm!: FormGroup;
  submitted: boolean = false;
  operattion: string = OperationEnum.CREATE;
  currentRole: Role = {};
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initCreateRole();
    this.role$.subscribe((data) => {
      this.operattion = data.operation;
      this.currentRole = data.role;
      if(data.operation == OperationEnum.CREATE) {
        this.initCreateRole();
      } else {
        this.editRole(data.role);
      }
    });
    
  }

  get role() { return this.roleForm.controls; }

  initCreateRole(): void {
    this.roleForm = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      descriptionFr: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
      descriptionEn: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
    });
  }

  editRole(role: Role): void {
    this.roleForm = this.fb.group({
      name: [role.name, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      descriptionFr: [role.descriptionFr, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
      descriptionEn: [role.descriptionEn, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
    });
  }

  updateRole(): void {
    this.submitted = true;
    if(this.roleForm.invalid) {
      return;
    }
    this.loading$.next(true);
    this.onRole.emit({role: this.roleForm.value, operation: this.operattion});
  }

  cancel() : void{
    if(this.operattion == OperationEnum.CREATE) {
      this.initCreateRole();
    } else {
      this.editRole(this.currentRole);
    }
  }
}
