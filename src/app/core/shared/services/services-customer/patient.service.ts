import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../config/app.url.config';
import { Patient } from '../../models/modal-customer/patient.modal';
import { share } from 'rxjs/operators';
import { ResponseDto } from '../../dto/response-dto.modal';

@Injectable({ providedIn: 'root' })
export class PatientService {

  constructor(private http: HttpClient) { }

  /**
   * findPatientByNumReciept
   * @param params 
   * @returns Observable<Array<Patient>>
   * numReciept.equals
   */
  findPatientByNumReciept(params: {[param: string]: string}): Observable<Array<Patient>> {
    return this.http.get<Array<Patient>>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/assujettis` , {params}).pipe(share());
  }
  
  /**
   * findPatientByHopital
   * @param idHopital 
   * @returns Observable<ResponseDto<Array<Patient>>>
   */
  findPatientByHopital(idHopital: any): Observable<ResponseDto<Array<Patient>>> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/patiens/${idHopital}`).pipe(share());
  }

}
