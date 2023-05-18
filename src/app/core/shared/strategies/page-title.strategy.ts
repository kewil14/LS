import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private translateService: TranslateService) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle( `Health - ${this.translateService.instant(title)}`);
    }
  }
}