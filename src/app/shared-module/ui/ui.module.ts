import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderPageComponent } from './loader-page/loader-page.component';
import { LoginButtonComponent } from './buttons/forms/login-button/login-button.component';
import { SaveButtonComponent } from './buttons/forms/save-button/save-button.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [PagetitleComponent,  LoaderComponent, LoaderPageComponent,
    LoginButtonComponent, SaveButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [PagetitleComponent, LoaderComponent, LoaderPageComponent,
    LoginButtonComponent, SaveButtonComponent]
})
export class UIModule { }
