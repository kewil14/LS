import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { TraitmentValue } from 'src/app/core/shared/models/traitment-value.modal';

@Component({
  selector: 'health-display-detail-traitment',
  templateUrl: './display-detail-traitment.component.html',
  styleUrls: ['./display-detail-traitment.component.scss']
})
export class DisplayDetailTraitmentComponent {
  @Input() traitment$!: BehaviorSubject<TraitmentValue>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, traitment: TraitmentValue}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  traitment: TraitmentValue): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,traitment: traitment})
  }
}
