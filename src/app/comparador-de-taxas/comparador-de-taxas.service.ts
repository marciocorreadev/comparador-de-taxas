/** @format */

import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class comparadorDeTaxasService {
  baseUrl: string = environment.backend.baseURL;

  taxas: any = {
    creditoParcelado2a61D: localStorage.getItem('creditoParcelado2a61D') || 0,
    creditoParcelado2a630D: localStorage.getItem('creditoParcelado2a630D') || 0,
    creditoParcelado7a121D: localStorage.getItem('creditoParcelado7a121D') || 0,
    creditoParcelado7a1230D: localStorage.getItem('creditoParcelado7a1230D') || 0,
    creditoAVista1D: localStorage.getItem('creditoAVista1D') || 0,
    creditoAVista30D: localStorage.getItem('creditoAVista30D') || 0,
    creditoAVista0: localStorage.getItem('creditoAVista0') || 0,
    debito0: localStorage.getItem('debito0') || 0,
    debito199: localStorage.getItem('debito199') || 0,
    debitoNull: localStorage.getItem('debitoNull') || 0,
  };
  constructor(private http: HttpClient) {}

  getTaxas() {
    return this.taxas;
  }

  setTaxas(taxas) {
    const API = `${this.baseUrl}/taxas`;
    return this.http.post(`${API}`, taxas).pipe(
      tap(
        (data) => data,
        (error) => error
      )
    );
  }

  setCliente(data) {
    const API = `${this.baseUrl}/cliente`;
    return this.http.post(`${API}`, data).pipe(
      tap(
        (data) => data,
        (error) => error
      )
    );
  }
  getCliente(email) {
    return this.http
      .get(`${this.baseUrl}/cliente/${email}`, {
        responseType: 'text',
      })
      .pipe(
        tap(
          (data) => data,
          (error) => error
        )
      );
  }
}
