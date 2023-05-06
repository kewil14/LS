import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LangInterceptor } from './shared/helpers/lang.interceptor';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './ngrx/authentification/authentification.effects';
import { FormesEffects } from './ngrx/forme/forme.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './core.state';
import { CategoriesEffects } from './ngrx/categorie/categorie.effects';
import { DcisEffects } from './ngrx/dci/dci.effects';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      AuthenticationEffects,
      FormesEffects,
      CategoriesEffects,
      DcisEffects
    ]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LangInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HttpClient
  ],
})
export class CoreModule { }
