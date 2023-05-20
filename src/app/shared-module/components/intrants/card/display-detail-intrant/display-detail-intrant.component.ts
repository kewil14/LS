import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { IntrantValue } from 'src/app/core/shared/models/intrant-value.modal';

@Component({
  selector: 'health-display-detail-intrant',
  templateUrl: './display-detail-intrant.component.html',
  styleUrls: ['./display-detail-intrant.component.scss']
})
export class DisplayDetailIntrantComponent {
  @Input() intrant$!: BehaviorSubject<IntrantValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, intrant: IntrantValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  intrant: IntrantValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,intrant: intrant})
  }
}
