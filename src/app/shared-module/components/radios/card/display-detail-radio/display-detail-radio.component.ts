import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { RadioValue } from 'src/app/core/shared/models/radio-value.modal';

@Component({
  selector: 'health-display-detail-radio',
  templateUrl: './display-detail-radio.component.html',
  styleUrls: ['./display-detail-radio.component.scss']
})
export class DisplayDetailRadioComponent {
  @Input() radio$!: BehaviorSubject<RadioValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, radio: RadioValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  radio: RadioValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,radio: radio})
  }
}
