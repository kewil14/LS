import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { LaboratoireValue } from 'src/app/core/shared/models/laboratoire-value.modal';

@Component({
  selector: 'health-display-detail-laboratoire',
  templateUrl: './display-detail-laboratoire.component.html',
  styleUrls: ['./display-detail-laboratoire.component.scss']
})
export class DisplayDetailLaboratoireComponent {
  @Input() laboratoire$!: BehaviorSubject<LaboratoireValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, laboratoire: LaboratoireValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  laboratoire: LaboratoireValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,laboratoire: laboratoire})
  }
}
