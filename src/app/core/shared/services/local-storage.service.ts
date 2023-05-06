import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_ENUMS } from '../../config/app.enums.config';
import { AuthentificationDto } from '../dto/authentification-dto.modal';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private currentTokenSubject: BehaviorSubject<AuthentificationDto>;
  public currentToken: Observable<AuthentificationDto>;

  private localLangSubject: BehaviorSubject<string>;
  public localLang: Observable<string>;

  constructor(
  ) {
    this.currentTokenSubject = new BehaviorSubject<AuthentificationDto>(JSON.parse(localStorage.getItem(APP_ENUMS.PREFIX_TOKEN) || '{}'));
    this.currentToken = this.currentTokenSubject.asObservable();

    this.localLangSubject = new BehaviorSubject<string>(localStorage.getItem(APP_ENUMS.PREFIX_LOCAL_LANG) || APP_ENUMS.PREFIX_DEFAULT_LANGUAGE);
    this.localLang = this.localLangSubject.asObservable();
  }

  public get localLangValue(): string {
    return this.localLangSubject.value;
  }
  public setLocalLangValue(lang: string): void {
    localStorage.setItem(APP_ENUMS.PREFIX_LOCAL_LANG , lang);
    this.localLangSubject.next(lang);
  }

  public get currentTokenValue(): AuthentificationDto {
    return this.currentTokenSubject.value;
  }

  public setCurrentTokenValue(auth: AuthentificationDto): void {
    localStorage.setItem(APP_ENUMS.PREFIX_TOKEN , JSON.stringify(auth));
    this.currentTokenSubject.next(auth);
  }

  getRoles(): Array<any> {
    const jwt = this.currentTokenValue?.jwt || '';
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(jwt)?.roles;
  }

  isTokenExpired(): boolean {
    const jwt = this.currentTokenValue?.jwt || '';
    const jwtHelper = new JwtHelperService();
    if (jwtHelper.isTokenExpired(jwt)) {
      this.logout();
    }
    return jwtHelper.isTokenExpired(jwt);
  }

  getSubject(): string {
    const jwt = this.currentTokenValue?.jwt || '';
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(jwt)?.sub;
  }

  hasRole(roles: Array<any>): boolean {
    if (!roles || !roles[0]) return true;
    for (const rol of this.getRoles()) {
      if (roles.includes(rol.authority)) {
        return true;
      }
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(APP_ENUMS.PREFIX_TOKEN);
  }

  dbOptions(): any {
    return {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10, 25, 50],
      processing: true,
      responsive: true,
    }
  }
}
