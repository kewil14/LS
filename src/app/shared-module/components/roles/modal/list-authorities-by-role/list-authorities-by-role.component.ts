import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-list-authorities-by-role',
  templateUrl: './list-authorities-by-role.component.html',
  styleUrls: ['./list-authorities-by-role.component.scss']
})
export class ListAuthoritiesByRoleComponent implements OnInit {

  @Input() authorities$!: BehaviorSubject<Role[]>;
  dbOptions: any = {};
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.dbOptions = this.localStorageService.dbOptions();
  }


}
