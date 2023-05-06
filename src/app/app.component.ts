import { Component , OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './core/shared/services/local-storage.service';
import { APP_ENUMS } from './core/config/app.enums.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  constructor(private translateService: TranslateService, private localStorageService: LocalStorageService){
    this.translateService.setDefaultLang(APP_ENUMS.PREFIX_DEFAULT_LANGUAGE);
    this.translateService.use(this.localStorageService.localLangValue);
    document.documentElement.lang = this.localStorageService.localLangValue;
  }
  ngOnInit(): void {}
}
