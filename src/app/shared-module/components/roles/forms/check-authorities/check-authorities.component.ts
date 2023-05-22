import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { RoleService } from 'src/app/core/shared/services/services-role/role.service';

@Component({
  selector: 'health-check-authorities',
  templateUrl: './check-authorities.component.html',
  styleUrls: ['./check-authorities.component.scss']
})
export class CheckAuthoritiesComponent implements OnInit {

  @Input() authorities$!: BehaviorSubject<Array<Role>>;
  constructor(
    private roleService: RoleService,
  ) { }

  ngOnInit() {
  }

}
