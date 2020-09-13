/** @format */

import { comparadorDeTaxasService } from '../comparador-de-taxas.service';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { isMobile } from 'is-mobile';
@Component({
  selector: 'calculadora-tabela',
  templateUrl: './calculadora-tabela.component.html',
  styleUrls: ['./calculadora-tabela.component.css'],
})
export class calculadoraTabelaComponent implements OnInit, OnDestroy {
  form: FormGroup;
  taxas: any = {};
  bkpTaxas: any = {};
  resultados: any[] = [];
  tabela: string = 'todos';
  validForm: boolean = true;
  tipoTaxaAVista: string = '(1 Dia)';
  visualizacaoDasTaxas: string = 'vendedor';
  width: number = document.querySelector('body').scrollWidth;
  mobile: boolean = isMobile();
  section = this.el.nativeElement.querySelector('section');

  private subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private taxasService: comparadorDeTaxasService,
    private el: ElementRef
  ) {}
  ngOnInit() {
    this.taxas = this.taxasService.getTaxas();

    for (const key in this.taxas) {
      this.bkpTaxas[key] = this.taxas[key];
    }

    this.form = this.formBuilder.group({
      valorTransacao: [0, [Validators.required, Validators.min(0.1)]],
      planoRecebimento: [localStorage.getItem('planoRecebimento') || '1D'],
      taxaCreditoAVista: [
        localStorage.getItem('planoRecebimento') == '30D'
          ? localStorage.getItem('creditoAVista30D') || this.taxas.creditoAVista30D
          : localStorage.getItem('creditoAVista1D') || this.taxas.creditoAVista1D,
      ],
      taxaCreditoParcelado2a6: [
        localStorage.getItem('planoRecebimento') == '30D'
          ? localStorage.getItem('creditoParcelado2a630D') || this.taxas.creditoParcelado2a630D
          : localStorage.getItem('creditoParcelado2a61D') || this.taxas.creditoParcelado2a61D,
      ],
      taxaCreditoParcelado7a12: [
        localStorage.getItem('planoRecebimento') == '30D'
          ? localStorage.getItem('CreditoParcelado7a1230D') || this.taxas.creditoParcelado7a1230D
          : localStorage.getItem('CreditoParcelado7a121D') || this.taxas.creditoParcelado7a121D,
      ],
      taxaDebito: [this.taxas.debitoNull],
      taxaParcelamento: [localStorage.getItem('taxaParcelamento') || 0],
      promocao: ['null'],
      visualizacaoDasTaxas: [localStorage.getItem('visualizacaoDasTaxas') || 'vendedor'],
    });

    this.subscriptions.push(
      this.form.get('visualizacaoDasTaxas').valueChanges.subscribe((value) => {
        localStorage.setItem('visualizacaoDasTaxas', value);
      })
    );
    this.subscriptions.push(
      this.form.get('taxaParcelamento').valueChanges.subscribe((value) => {
        if (!value) {
          this.form.get('taxaParcelamento').setValue('0');
        } else {
          localStorage.setItem('taxaParcelamento', value);
        }
      })
    );
    this.subscriptions.push(
      this.form.get('taxaDebito').valueChanges.subscribe((value) => {
        if (!value) {
          this.form.get('taxaDebito').setValue('0');
        } else {
          this.atualizarTxDebito(this.form.get('promocao').value, value);
        }
      })
    );

    this.subscriptions.push(
      this.form.get('taxaCreditoAVista').valueChanges.subscribe((value) => {
        if (!value) {
          this.form.get('taxaCreditoAVista').setValue('0');
        } else {
          this.atualizarTxCredAVista(this.form.get('planoRecebimento').value, value);
        }
      })
    );

    this.subscriptions.push(
      this.form.get('taxaCreditoParcelado2a6').valueChanges.subscribe((value) => {
        if (!value) {
          this.form.get('taxaCreditoParcelado2a6').setValue('0');
        } else {
          this.form.get('taxaCreditoParcelado7a12').setValue(value);
          this.atualizarTxCredParcelado2a6(this.form.get('planoRecebimento').value, value);
        }
      })
    );

    this.subscriptions.push(
      this.form.get('taxaCreditoParcelado7a12').valueChanges.subscribe((value) => {
        if (!value) {
          this.form.get('taxaCreditoParcelado7a12').setValue('0');
        } else {
          this.atualizarTxCredParcelado7a12(this.form.get('planoRecebimento').value, value);
        }
      })
    );

    this.subscriptions.push(
      this.form.get('planoRecebimento').valueChanges.subscribe((value) => {
        localStorage.setItem('planoRecebimento', value);
        const credito = this.obterTxCredito(value);
        this.form.get('taxaCreditoParcelado2a6').setValue(credito.parcelado2a6);
        this.form.get('taxaCreditoParcelado7a12').setValue(credito.parcelado7a12);
        this.atualizarValorCredAVista(credito.aVista);
        this.tipoTaxaAVista = credito.tipoTaxaAVista;
      })
    );

    this.subscriptions.push(
      this.form.get('promocao').valueChanges.subscribe((value) => {
        const credito = this.obterTxCredito(this.form.get('planoRecebimento').value);
        const debito = this.obterTxDebito(value);
        this.form.get('taxaDebito').setValue(debito.taxa);
        this.atualizarValorCredAVista(credito.aVista);
      })
    );

    this.subscriptions.push(
      this.form.get('visualizacaoDasTaxas').valueChanges.subscribe((value) => {
        this.visualizacaoDasTaxas = value;
        setTimeout(() => {
          // window.scroll({ top: 700, behavior: 'smooth' });
        }, 300);
      })
    );

    this.form.get('valorTransacao').valueChanges.subscribe((value) => {
      if (value > 0.1) {
        this.form.get('valorTransacao').status == 'VALID'
          ? (this.validForm = true)
          : (this.validForm = false);
      }
    });
  }

  atualizarTxDebito(type: string, value: number) {
    return {
      '0': () => ((this.taxas.debito0 = value), localStorage.setItem('debito0', value.toString())),
      '199': () => (
        (this.taxas.debito199 = value), localStorage.setItem('debito199', value.toString())
      ),
      null: () => (
        (this.taxas.debitoNull = value), localStorage.setItem('debitoNull', value.toString())
      ),
    }[type]();
  }

  atualizarTxCredAVista(type: string, value: number) {
    if (this.form.get('promocao').value != '0') {
      return {
        '1D': () => (
          (this.taxas.creditoAVista1D = value),
          localStorage.setItem('creditoAVista1D', value.toString())
        ),
        '30D': () => (
          (this.taxas.creditoAVista30D = value),
          localStorage.setItem('creditoAVista30D', value.toString())
        ),
      }[type]();
    } else {
      this.taxas.creditoAVista0 = value;
      localStorage.setItem('creditoAVista0', value.toString());
    }
  }

  atualizarTxCredParcelado2a6(type: string, value: number) {
    return {
      '1D': () => (
        (this.taxas.creditoParcelado2a61D = value),
        localStorage.setItem('creditoParcelado2a61D', value.toString())
      ),
      '30D': () => (
        (this.taxas.creditoParcelado2a630D = value),
        localStorage.setItem('creditoParcelado2a630D', value.toString())
      ),
    }[type]();
  }

  atualizarTxCredParcelado7a12(type: string, value: number) {
    return {
      '1D': () => (
        (this.taxas.creditoParcelado7a121D = value),
        localStorage.setItem('creditoParcelado7a121D', value.toString())
      ),
      '30D': () => (
        (this.taxas.creditoParcelado7a1230D = value),
        localStorage.setItem('creditoParcelado7a1230D', value.toString())
      ),
    }[type]();
  }

  atualizarValorCredAVista(value: number) {
    this.form.get('promocao').value === '0'
      ? this.form.get('taxaCreditoAVista').setValue(this.taxas.creditoAVista0)
      : this.form.get('taxaCreditoAVista').setValue(value);
  }

  obterTxCredito(type: string) {
    return {
      '1D': {
        parcelado2a6: this.taxas.creditoParcelado2a61D,
        parcelado7a12: this.taxas.creditoParcelado7a121D,
        aVista: this.taxas.creditoAVista1D,
        tipoTaxaAVista: '(1 Dia)',
      },
      '30D': {
        parcelado2a6: this.taxas.creditoParcelado2a630D,
        parcelado7a12: this.taxas.creditoParcelado7a1230D,
        aVista: this.taxas.creditoAVista30D,
        tipoTaxaAVista: '(30 Dias)',
      },
    }[type];
  }

  obterTxDebito(type: string) {
    return {
      '0': { taxa: this.taxas.debito0 },
      '199': { taxa: this.taxas.debito199 },
      null: { taxa: this.taxas.debitoNull },
    }[type];
  }

  validarFormulario() {
    this.form.get('valorTransacao').status == 'VALID'
      ? (this.validForm = true)
      : (this.validForm = false);
  }

  calculaAVista(form, nome) {
    const taxa = nome === 'Déb.' ? form.taxaDebito : form.taxaCreditoAVista;
    const valorTotal = form.valorTransacao;
    let valorTaxaTotal: number = Number((taxa * 100).toFixed(3));
    valorTaxaTotal /= 100;
    const valorVendaDespesaCliente = valorTotal / (1 - valorTaxaTotal / 100);
    let p: any = {};
    p.nome = {
      curto: nome,
      longo: nome === 'Déb.' ? 'Débito' : 'Crédito 1x',
    };
    p.txIntermediacao = nome === 'Déb.' ? 0 : taxa;
    p.qtdeParcelas = 1;
    p.txParcelamento = 0;
    p.txTotal = valorTaxaTotal;
    p.valorVenda = valorTotal;
    p.valorParcelaDespesaVendedor = valorTotal;
    p.valorTxIntermediacaoVendedor = nome === 'Déb.' ? 0 : taxa;
    p.valorTxParcelamentoVendedor = 0;
    p.valorTxDespesaVendedor = (valorTotal * valorTaxaTotal) / 100;
    p.valorTxDebito = nome === 'Déb.' ? valorTaxaTotal : 0;
    p.valorLiquidoDespesaVendedor = valorTotal - p.valorTxDespesaVendedor;
    p.valorVendaDespesaCliente = valorVendaDespesaCliente;
    p.valorParcelaDespesaCliente = valorVendaDespesaCliente;
    p.valorTxIntermediacaoCliente = nome === 'Déb.' ? 0 : taxa;
    p.valorTxParcelamentoCliente = 0;
    p.txDebitoJurosCliente = valorVendaDespesaCliente - valorTotal;
    p.valorTxDespesaCliente = p.txDebitoJurosCliente;
    p.valorLiquidoDespesaClientel = valorTotal;
    p.valorVendaDespesaParcelamentoCliente = valorTotal;
    p.valorParcelaDespesaParcelamentoCliente = valorTotal;
    p.valorLiquidoDespesaIntermediacaoCliente = valorTotal - p.valorTxDespesaVendedor;
    this.resultados.push(p);
  }

  calculaParcelado(form) {
    const valorTotal = form.valorTransacao;
    for (let qtdeParcelas = 2; qtdeParcelas <= 12; qtdeParcelas++) {
      let valorTxParcelamento = this.calcularTxParcelamento(
        valorTotal,
        qtdeParcelas,
        form.taxaParcelamento / 100
      );

      let p: any = {};
      p.nome = {
        curto: `${qtdeParcelas}x`,
        longo: `Crédito ${qtdeParcelas}x`,
      };

      p.qtdeParcelas = qtdeParcelas;
      p.txIntermediacao =
        qtdeParcelas <= 6
          ? parseFloat(form.taxaCreditoParcelado2a6)
          : parseFloat(form.taxaCreditoParcelado7a12);
      p.txParcelamento = 100 * (valorTxParcelamento / valorTotal);
      p.txParcelamento = Number(p.txParcelamento.toFixed(2));
      p.txTotal = p.txIntermediacao + p.txParcelamento;
      p.valorVenda = valorTotal;
      p.valorParcelaDespesaVendedor = valorTotal / qtdeParcelas;
      p.valorTxIntermediacaoVendedor = (valorTotal * p.txIntermediacao) / 100;
      p.valorTxParcelamentoVendedor = (valorTotal * p.txParcelamento) / 100;
      p.valorTxDespesaVendedor = p.valorTxIntermediacaoVendedor + p.valorTxParcelamentoVendedor;
      p.valorLiquidoDespesaVendedor = valorTotal - p.valorTxDespesaVendedor;
      p.valorVendaDespesaCliente = valorTotal / (1 - p.txTotal / 100);
      p.valorParcelaDespesaCliente = p.valorVendaDespesaCliente / qtdeParcelas;
      p.valorTxIntermediacaoCliente = (p.valorVendaDespesaCliente * p.txIntermediacao) / 100;
      p.valorTxParcelamentoCliente = (p.valorVendaDespesaCliente * p.txParcelamento) / 100;
      p.valorTxDespesaCliente = p.valorTxIntermediacaoCliente + p.valorTxParcelamentoCliente;
      p.valorLiquidoDespesaClientel = valorTotal;
      p.valorVendaDespesaParcelamentoCliente = valorTotal + p.valorTxParcelamentoCliente;
      p.valorParcelaDespesaParcelamentoCliente =
        p.valorVendaDespesaParcelamentoCliente / qtdeParcelas;
      p.valorLiquidoDespesaIntermediacaoCliente = valorTotal - p.valorTxIntermediacaoVendedor;
      p.valorTxDebito = 0;
      p.txDebitoJurosCliente = 0;
      this.resultados.push(p);
    }
  }

  calcularTxParcelamento(valorVenda, qtdeParcelas, txParcelamento) {
    let valorTaxaParcelamento = 0;
    let valorParcelamento = valorVenda / qtdeParcelas;
    for (let i = 1; i <= qtdeParcelas; i++) {
      valorTaxaParcelamento =
        valorTaxaParcelamento + valorParcelamento / Math.pow(1 + txParcelamento, i);
    }

    return valorVenda - valorTaxaParcelamento;
  }

  calcular(form) {
    this.validarFormulario();

    if (this.validForm) {
      this.resultados = [];
      this.calculaAVista(form, 'Déb.');
      this.calculaAVista(form, '1x');
      this.calculaParcelado(form);

      const cliente = JSON.parse(localStorage.getItem('dadosLoginCalculadora'));
      const taxas = {
        cliente: cliente.id,
        visao: this.form.get('visualizacaoDasTaxas').value,
        planoRecebimento: this.form.get('planoRecebimento').value,
        taxaDebito: parseFloat(this.form.get('taxaDebito').value),
        taxaCreditoAVista: parseFloat(this.form.get('taxaCreditoAVista').value),
        taxaCreditoParcelado2a6: parseFloat(this.form.get('taxaCreditoParcelado2a6').value),
        taxaCreditoParcelado7a12: parseFloat(this.form.get('taxaCreditoParcelado7a12').value),
        taxaAntecipacaoParcelamento: parseFloat(this.form.get('taxaParcelamento').value),
      };

      this.subscriptions.push(
        this.taxasService.setTaxas(taxas).subscribe(
          (res) => {},
          (err) => {
            if (err['cliente'] == null) {
              this.taxasService.setCliente(cliente).subscribe((res) => {
                if (res['data']) {
                  localStorage.setItem(
                    'dadosLoginCalculadora',
                    JSON.stringify({ ...cliente, id: res['data']._id })
                  );

                  const newTaxas = { ...taxas, cliente: res['data']._id };

                  this.taxasService.setTaxas(newTaxas).subscribe(
                    (res) => {},
                    (err) => {}
                  );
                }
              });
            }
          }
        )
      );
    } else {
      this.validarFormulario();
    }
  }

  limpar() {
    this.resultados = [];
    this.validForm = true;
    this.el.nativeElement.querySelector('.valorTransacao').focus();
    for (const key in this.taxas) {
      this.taxas[key] = this.bkpTaxas[key];
    }
    this.form.setValue({
      valorTransacao: 0,
      planoRecebimento: '1D',
      taxaCreditoAVista: 0,
      taxaCreditoParcelado2a6: 0,
      taxaCreditoParcelado7a12: 0,
      taxaDebito: 0,
      taxaParcelamento: 0,
      promocao: 'null',
      visualizacaoDasTaxas: 'vendedor',
    });
  }

  recalcular() {
    this.resultados = [];
    this.validForm = true;
    this.el.nativeElement.querySelector('.valorTransacao').focus();
  }

  getWidth() {
    this.width = document.querySelector('body').scrollWidth;
    this.mobile = isMobile();
  }

  removerTooltip() {
    if (document.querySelector('bs-tooltip-container')) {
      document.querySelector('bs-tooltip-container').classList.remove('show');
    }
  }

  addTooltip() {
    if (document.querySelector('bs-tooltip-container')) {
      document.querySelector('bs-tooltip-container').classList.add('show');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
