/** @format */

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { comparadorDeTaxasService } from './comparador-de-taxas.service';
import localePt from '@angular/common/locales/pt';
import { NgxCurrencyModule, CurrencyMaskInputMode } from 'ngx-currency';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calculadoraTabelaComponent } from './calculadora-tabela/calculadora-tabela.component';
import { ComparadorDeTaxasComponent } from './comparador-de-taxas.component';

registerLocaleData(localePt, 'pt-BR');

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,

  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [calculadoraTabelaComponent, ComparadorDeTaxasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    TooltipModule.forRoot(),
  ],
  providers: [comparadorDeTaxasService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class comparadorDeTaxasModule {}
