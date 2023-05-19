import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Forme } from 'src/app/core/shared/models/forme.modal';

@Component({
  selector: 'health-display-detail-forme',
  templateUrl: './display-detail-forme.component.html',
  styleUrls: ['./display-detail-forme.component.scss']
})
export class DisplayDetailFormeComponent {

  @Input() forme$!: BehaviorSubject<Forme>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, forme: Forme}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  forme: Forme): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,  forme: forme})
  }
}
