import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { AllergieValue } from 'src/app/core/shared/models/allergie-value.modal';

@Component({
  selector: 'health-display-detail-allergie',
  templateUrl: './display-detail-allergie.component.html',
  styleUrls: ['./display-detail-allergie.component.scss']
})
export class DisplayDetailAllergieComponent {
  @Input() allergie$!: BehaviorSubject<AllergieValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, allergie: AllergieValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  allergie: AllergieValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,allergie: allergie})
  }
}
