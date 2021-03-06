/** @format */

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { comparadorDeTaxasService } from './comparador-de-taxas.service';

@Component({
  selector: 'app-comparador-de-taxas',
  templateUrl: './comparador-de-taxas.component.html',
  styleUrls: ['./comparador-de-taxas.component.css'],
})
export class ComparadorDeTaxasComponent implements OnInit {
  form: FormGroup;

  dadosLoginCalculadora = localStorage.getItem('dadosLoginCalculadora');

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private service: comparadorDeTaxasService
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [, [Validators.required, Validators.minLength(3)]],
      email: [, [Validators.required, Validators.email]],
    });
  }

  onSwal() {
    this.dadosLoginCalculadora = localStorage.getItem('dadosLoginCalculadora');
    if (!this.dadosLoginCalculadora) {
      setTimeout(async () => {
        this.onLogin();
      }, 2000);
    }
  }

  async onLogin(nome = '', email = '', classEmail = '', classNome = '') {
    const { value: dadosLoginCalculadora } = await Swal.fire({
      width: 400,
      heightAuto: true,
      position: 'top',
      grow: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      scrollbarPadding: true,
      confirmButtonText: 'Usar calculadora de taxas',
      confirmButtonColor: '#2196f3',
      showClass: {
        popup: 'animate__animated animate__headShake',
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOutDown',
      },
      customClass: {
        confirmButton: 'btn-confirm-sweet',
      },
      html: `
        <h5>Informe seu nome e e-mail </br> 
        para continuar </h5> 

        <input id="nome" placeholder="Nome"  value="${nome}"
        name="nome" class="form-control mt-4 input-sweet ${classNome}">

        <input id="email"  placeholder="E-mail" value="${email}"
         name="email" class="form-control mt-3 mb-1 input-sweet ${classEmail}">
         `,

      focusConfirm: false,
      preConfirm: async () => {
        this.form.get('nome').setValue(document.getElementById('nome')['value']);
        this.form.get('email').setValue(document.getElementById('email')['value']);

        const classEmail = !this.form.get('email').valid
          ? 'invalid-input-sweet'
          : 'valid-input-sweet';

        const classNome = !this.form.get('nome').valid
          ? 'invalid-input-sweet'
          : 'valid-input-sweet';

        if (!this.form.valid) {
          return this.onLogin(
            this.form.get('nome').value,
            this.form.get('email').value,
            classEmail,
            classNome
          );
        } else {
          return this.form.value;
        }
      },
    });
    if (dadosLoginCalculadora != true && dadosLoginCalculadora != false) {
      this.dadosLoginCalculadora = dadosLoginCalculadora;
      this.subscriptions.push(
        this.service.setCliente(dadosLoginCalculadora).subscribe(
          (res) => {
            if (res['data']) {
              localStorage.setItem(
                'dadosLoginCalculadora',
                JSON.stringify({ ...dadosLoginCalculadora, id: res['data']._id })
              );
            }
          },
          (err) => {
            this.service.getCliente(dadosLoginCalculadora.email).subscribe(
              (res) => {
                const {
                  data: [{ _id }],
                } = JSON.parse(res);
                localStorage.setItem(
                  'dadosLoginCalculadora',
                  JSON.stringify({ ...dadosLoginCalculadora, id: _id })
                );
              },
              (err) => console.log('Error in save customer')
            );
          }
        )
      );
    }
  }
  gOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
