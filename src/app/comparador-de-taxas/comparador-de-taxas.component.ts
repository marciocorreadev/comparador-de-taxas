/** @format */

import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-comparador-de-taxas',
  templateUrl: './comparador-de-taxas.component.html',
  styleUrls: ['./comparador-de-taxas.component.css'],
})
export class ComparadorDeTaxasComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(async () => {
      const { value: formValues } = await Swal.fire({
        width: 400,
        heightAuto: true,
        position: 'top',
        grow: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        scrollbarPadding: false,
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
        para continuar</h5> 

        <input id="email" placeholder="Nome"   
        name="nome" class="form-control mt-4 input-sweet">

        <input id="nome"  placeholder="E-mail"
         name="email" class="form-control mt-3 mb-1 input-sweet">`,

        focusConfirm: false,
        preConfirm: function () {
          const email = document.getElementById('email')['value'];
          const nome = document.getElementById('nome')['value'];
          console.log(!nome);
          if (!email && !nome) {
            return false;
          } else {
            return true;
          }
        },
      });

      console.log(formValues);
    }, 10);
  }
}
