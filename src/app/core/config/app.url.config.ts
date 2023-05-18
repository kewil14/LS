import {environment} from '../../../environments/environment';

const API_HEALTH_CORE = environment.BaseUrlHealthHospiCore;

export const API_URLS = {
  HEALTH_CORE_URL: API_HEALTH_CORE,
};


export const APP_LINK = {
  LINK_AUTH_LOGIN: '/auth/login',
  LINK_AUTH_RESET_PASSWORD: '/auth/reset',
  LINK_AUTH_NEW_PASSWORD: '/auth/lock',
  LINK_DASHBOARD_ADMIN: '/admin'
}