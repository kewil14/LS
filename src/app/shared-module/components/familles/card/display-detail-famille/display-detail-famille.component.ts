import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Famille } from 'src/app/core/shared/models/famille.modal';

@Component({
  selector: 'health-display-detail-famille',
  templateUrl: './display-detail-famille.component.html',
  styleUrls: ['./display-detail-famille.component.scss']
})
export class DisplayDetailFamilleComponent {
  @Input() famille$!: BehaviorSubject<Famille>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, famille: Famille}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum,  famille: Famille): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action,famille: famille})
  }
}
