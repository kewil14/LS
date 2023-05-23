import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role } from 'src/app/core/shared/models/modal-role/role.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'health-show-authorities',
  templateUrl: './show-authorities.component.html',
  styleUrls: ['./show-authorities.component.scss']
})
export class ShowAuthoritiesComponent implements OnInit {

  @Input() authorities$!: BehaviorSubject<Role[]>;
  dbOptions: any = {};
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.dbOptions = this.localStorageService.dbOptions();
  }

}
