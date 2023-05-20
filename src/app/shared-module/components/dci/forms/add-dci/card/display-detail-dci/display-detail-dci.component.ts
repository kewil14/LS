import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Dci } from 'src/app/core/shared/models/dci.modal';

@Component({
  selector: 'health-display-detail-dci',
  templateUrl: './display-detail-dci.component.html',
  styleUrls: ['./display-detail-dci.component.scss']
})
export class DisplayDetailDciComponent {
  @Input() dci$!: BehaviorSubject<Dci>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, dci: Dci}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  dci: Dci): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,dci: dci})
  }
}
