import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { LengthTextPipe } from './pipes/length-text.pipe';
import { SuspensionPipe } from './pipes/suspension.pipe';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StatComponent } from './widget/stat/stat.component';
import { AddFormeComponent } from './components/formes/forms/add-forme/add-forme.component';
import { AddCategoryComponent } from './components/categories/forms/add-category/add-category.component';
import { AddFamilleComponent } from './components/familles/forms/add-famille/add-famille/add-famille.component';
import { AddDciComponent } from './components/dci/forms/add-dci/add-dci.component';
import { AddAntecedentValueComponent } from './components/antecedents-values/forms/add-antecedent-value/add-antecedent-value.component';
import { AddTypeAntecedentComponent } from './components/types-antecedents/forms/add-type-antecedent/add-type-antecedent.component';
import { AddTypeIntrantComponent } from './components/intrants/forms/add-type-intrant/add-type-intrant.component';
import { AddIntrantValueComponent } from './components/intrants/forms/add-intrant-value/add-intrant-value.component';
import { AddTypeTraitementComponent } from './components/traitments/forms/add-type-traitement/add-type-traitement.component';
import { AddTraitementValueComponent } from './components/traitments/forms/add-traitement-value/add-traitement-value.component';
import { AddTypeLaboratoireComponent } from './components/laboratoires/forms/add-type-laboratoire/add-type-laboratoire.component';
import { AddLaboratoireValueComponent } from './components/laboratoires/forms/add-laboratoire-value/add-laboratoire-value.component';
import { AddValueComponent } from './components/value-allergie/forms/add-value/add-value.component';
import { AddTypeComponent } from './components/type-allergie/forms/add-type/add-type.component';


@NgModule({
  declarations: [
    LengthTextPipe, SuspensionPipe, RelativeDatePipe, StatComponent, AddFormeComponent, AddCategoryComponent,
    AddFamilleComponent, AddDciComponent, AddTypeAntecedentComponent,
    AddTypeIntrantComponent, AddIntrantValueComponent, AddTypeTraitementComponent, AddTraitementValueComponent, AddTypeLaboratoireComponent, AddLaboratoireValueComponent,
    AddAntecedentValueComponent, AddValueComponent,AddTypeComponent
    
  ],
  exports: [
    LengthTextPipe, SuspensionPipe,  RelativeDatePipe, StatComponent, AddFormeComponent, AddCategoryComponent, AddLaboratoireValueComponent, 
    AddAntecedentValueComponent, AddTypeAntecedentComponent, AddTraitementValueComponent, AddTypeTraitementComponent,
    AddFamilleComponent, AddDciComponent, AddTypeIntrantComponent, AddIntrantValueComponent, AddTypeLaboratoireComponent,
    AddTypeComponent,AddValueComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule,
    TitleCasePipe,



  ]
})
export class SharedModuleModule {
  constructor() {
  }
}
