import { revenueBarChart, statData } from './data';
import { ChartType } from './institution.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Institution } from 'src/app/core/shared/models/modal-institution/institution.modal';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectInstitutionState } from 'src/app/core/core.state';
import { Sante } from 'src/app/core/shared/models/modal-institution/sante.modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeInstitutionEnum } from 'src/app/core/shared/enums/TypeInstitutionEnum';
import { Router } from '@angular/router';

@Component({
  selector: 'health-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  revenueBarChart!: ChartType;
  statData: any;
  institution$!: Observable<Sante>

  constructor(
    private storeService: Store,
    private modalService: NgbModal,
    private router:Router,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'Profile', active: true }];

    // fetches the data
    this._fetchData();

    //Afiche de l'institution
    this.institution$ = this.storeService.select(selectInstitutionState).pipe(
      map(({sante}) => sante)
    )


    
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
  }

  onCreateInstitution(templateView: TemplateRef<any>){
    this.modalService.open(templateView,{ size: 'sm', centered: true })
  }

  actionTypeInstitution($event: {type: TypeInstitutionEnum}): void {
    this.modalService.dismissAll();
    console.log($event);
    
    if($event.type == TypeInstitutionEnum.INSTITUTION_ASSURANCE) {
      // rediriger vers la pages assurance
      this.router.navigateByUrl('/assurance')
    } else if($event.type == TypeInstitutionEnum.INSTITUTION_HOPI) {
      // rediriger la pages hopi
      this.router.navigateByUrl('/institution/hopi')
    } else if($event.type == TypeInstitutionEnum.INSTITUTION_COMMUNE) {
      // rediriger la pages commune
      this.router.navigateByUrl('/commune')
    } else if($event.type == TypeInstitutionEnum.INSTITUTION_PHARMA) {
      // rediriger la pages pharma
      this.router.navigateByUrl('/pharma')
    }
  }
}
