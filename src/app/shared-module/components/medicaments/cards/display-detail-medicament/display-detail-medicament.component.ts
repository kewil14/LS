import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/shared/enums/TypeActionEnum';
import { Produit } from 'src/app/core/shared/models/produit.modal';

@Component({
  selector: 'health-display-detail-medicament',
  templateUrl: './display-detail-medicament.component.html',
  styleUrls: ['./display-detail-medicament.component.scss']
})
export class DisplayDetailMedicamentComponent {
  
  @Input() medicament$!: BehaviorSubject<Produit>;
  @Input() loadingActivate$!: BehaviorSubject<boolean>;
  @Input() loadingDelete$!: BehaviorSubject<boolean>;
  @Output() onActions = new EventEmitter<{action: TypeActionEnum, medicament: Produit}>();

  typeActionEnum: typeof TypeActionEnum = TypeActionEnum;

  clickAction(action: TypeActionEnum, produit: Produit): void {
    if(action == TypeActionEnum.DELETE) {
      this.loadingDelete$.next(true);
    } else if(action == TypeActionEnum.ACTIVATE){
      this.loadingActivate$.next(true);
    }
    this.onActions.emit({action: action, medicament: produit})
  }
}
