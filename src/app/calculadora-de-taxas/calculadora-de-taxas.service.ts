import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraDeTaxasService {
  taxas: any = {
    creditoParcelado2a61D: 5.59,
    creditoParcelado2a630D: 3.79,
    creditoParcelado7a121D: 5.59,
    creditoParcelado7a1230D: 3.79,
    creditoAVista1D: 4.99,
    creditoAVista30D: 3.19,
    creditoAVista0: 0,
    debito0: 0,
    debito199: 1.99,
    debitoNull: 2.39,
  };
  constructor() {}

  getTaxas() {
    return this.taxas;
  }
}
