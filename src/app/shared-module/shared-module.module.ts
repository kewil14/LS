import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthTextPipe } from './pipes/length-text.pipe';
import { SuspensionPipe } from './pipes/suspension.pipe';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddFormeComponent } from './components/formes/forms/add-forme/add-forme.component';
import { AddCategoryComponent } from './components/categories/forms/add-category/add-category.component';
import { AddFamilleComponent } from './components/familles/forms/add-famille/add-famille/add-famille.component';
import { AddDciComponent } from './components/dci/forms/add-dci/add-dci.component';
import { AddTypeIntrantComponent } from './components/intrants/forms/add-type-intrant/add-type-intrant.component';
import { AddIntrantValueComponent } from './components/intrants/forms/add-intrant-value/add-intrant-value.component';
import { AddTypeTraitementComponent } from './components/traitments/forms/add-type-traitement/add-type-traitement.component';
import { AddTraitementValueComponent } from './components/traitments/forms/add-traitement-value/add-traitement-value.component';
import { AddRadioValueComponent } from './components/radios/forms/add-radio-value/add-radio-value.component';
import { AddTypeRadioComponent } from './components/radios/forms/add-type-radio/add-type-radio.component';
import { AddAntecedentValueComponent } from './components/antecedents/forms/add-antecedent-value/add-antecedent-value.component';
import { AddTypeAntecedentComponent } from './components/antecedents/forms/add-type-antecedent/add-type-antecedent.component';
import { AddTypeLaboratoireComponent } from './components/laboratoires/forms/add-type-laboratoire/add-type-laboratoire.component';
import { AddLaboratoireValueComponent } from './components/laboratoires/forms/add-laboratoire-value/add-laboratoire-value.component';
import { AddValueComponent } from './components/allergies/forms/add-value/add-value.component';
import { AddTypeComponent } from './components/allergies/forms/add-type/add-type.component';
import { StatComponent } from './widget/stat/stat.component';
import { AddMedicamentComponent } from './components/medicaments/forms/add-medicament/add-medicament.component';
import { DisplayDetailMedicamentComponent } from './components/medicaments/cards/display-detail-medicament/display-detail-medicament.component';
import { DisplayDetailCategoryComponent } from './components/medicaments/cards/display-detail-category/display-detail-category.component';
import { DisplayDetailFormeComponent } from './components/medicaments/cards/display-detail-forme/display-detail-forme.component';
import { DisplayDetailFamilleComponent } from './components/medicaments/cards/display-detail-famille/display-detail-famille.component';
import { DisplayDetailDciComponent } from './components/medicaments/cards/display-detail-dci/display-detail-dci.component';


@NgModule({
  declarations: [
    LengthTextPipe, SuspensionPipe, RelativeDatePipe, AddFormeComponent, AddCategoryComponent, AddMedicamentComponent,
    AddFamilleComponent, AddDciComponent, AddTypeAntecedentComponent,
    AddTypeIntrantComponent, AddIntrantValueComponent, AddTypeTraitementComponent, AddTraitementValueComponent,
    AddAntecedentValueComponent, AddValueComponent,AddTypeComponent,AddLaboratoireValueComponent,
    AddRadioValueComponent, AddTypeRadioComponent, AddTypeLaboratoireComponent, StatComponent, DisplayDetailMedicamentComponent, DisplayDetailCategoryComponent, DisplayDetailFormeComponent, DisplayDetailFamilleComponent, DisplayDetailDciComponent
    
  ],
  exports: [
    LengthTextPipe, SuspensionPipe,  RelativeDatePipe, AddFormeComponent, AddCategoryComponent,AddDciComponent, 
    AddAntecedentValueComponent, AddTypeAntecedentComponent, AddTraitementValueComponent, AddTypeTraitementComponent,
    AddFamilleComponent, AddIntrantValueComponent, AddRadioValueComponent, AddTypeRadioComponent, StatComponent, AddMedicamentComponent,
    AddTypeIntrantComponent, AddTypeLaboratoireComponent, AddLaboratoireValueComponent, AddValueComponent, AddTypeComponent,
    DisplayDetailMedicamentComponent, DisplayDetailCategoryComponent, DisplayDetailFormeComponent, DisplayDetailFamilleComponent, DisplayDetailDciComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule
  ]
})
export class SharedModuleModule {
  constructor() {
  }
}
