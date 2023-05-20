import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Categorie } from 'src/app/core/shared/models/categorie.modal';

@Component({
  selector: 'health-display-detail-category',
  templateUrl: './display-detail-category.component.html',
  styleUrls: ['./display-detail-category.component.scss']
})
export class DisplayDetailCategoryComponent {
  @Input() categorie$!: BehaviorSubject<Categorie>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, categorie: Categorie}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  categorie: Categorie): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,categorie: categorie})
  }
}
