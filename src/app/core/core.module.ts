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
import { FamillesEffects } from './ngrx/famille/famille.effects';
import { DcisEffects } from './ngrx/dci/dci.effects';
import { TypeAntecedentsEffects } from './ngrx/type-antecedent/type-antecedent.effects';
import { AntecedentValuesEffects } from './ngrx/antecedent-value/antecedent-value.effects';
import { TypeIntrantsEffects } from './ngrx/type-intrant/type-intrant.effects';
import { IntrantValuesEffects } from './ngrx/intrant-value/intrant-value.effects';
import { TypeRadiosEffects } from './ngrx/type-radio/type-radio.effects';
import { RadioValuesEffects } from './ngrx/radio-value/radio-value.effects';
import { TypeLaboratoiresEffects } from './ngrx/type-laboratoire/type-laboratoire.effects';
import { LaboratoireValuesEffects } from './ngrx/laboratoire-value/laboratoire-value.effects';
import { TypeTraitmentsEffects } from './ngrx/type-traitment/type-traitment.effects';
import { TraitmentValuesEffects } from './ngrx/traitment-value/traitment-value.effects';

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
      FamillesEffects,
      DcisEffects,
      TypeAntecedentsEffects,
      AntecedentValuesEffects,
      TypeIntrantsEffects,
      IntrantValuesEffects,
      TypeRadiosEffects,
      RadioValuesEffects,
      TypeLaboratoiresEffects,
      LaboratoireValuesEffects,
      TypeTraitmentsEffects,
      TraitmentValuesEffects
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
