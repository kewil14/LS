import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleStrategy } from '@angular/router';
import { PageTitleStrategy } from './core/shared/strategies/page-title.strategy';
import { CoreModule } from './core/core.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    CoreModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [
    {provide: TitleStrategy, useClass: PageTitleStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
