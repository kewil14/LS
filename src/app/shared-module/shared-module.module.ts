import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthTextPipe } from './pipes/length-text.pipe';
import { SuspensionPipe } from './pipes/suspension.pipe';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StatComponent } from './widget/stat/stat.component';
import { AddFormeComponent } from './components/formes/forms/add-forme/add-forme.component';


@NgModule({
  declarations: [
    LengthTextPipe, SuspensionPipe, RelativeDatePipe, StatComponent, AddFormeComponent
    
  ],
  exports: [
    LengthTextPipe, SuspensionPipe,  RelativeDatePipe, StatComponent, AddFormeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule, //translate footer and header
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class SharedModuleModule {
  constructor() {
  }
}
