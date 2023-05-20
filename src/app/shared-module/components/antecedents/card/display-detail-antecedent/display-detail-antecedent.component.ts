import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { AntecedentValue } from 'src/app/core/shared/models/antecedent-value.modal';

@Component({
  selector: 'health-display-detail-antecedent',
  templateUrl: './display-detail-antecedent.component.html',
  styleUrls: ['./display-detail-antecedent.component.scss']
})
export class DisplayDetailAntecedentComponent {
  @Input() antecedent$!: BehaviorSubject<AntecedentValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, antecedent: AntecedentValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  antecedent: AntecedentValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,antecedent: antecedent})
  }
}
