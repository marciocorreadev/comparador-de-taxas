/** @format */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparadorDeTaxasComponent } from './comparador-de-taxas/comparador-de-taxas.component';

const routes: Routes = [
  {
    path: '',
    component: ComparadorDeTaxasComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'comparador' },
  { path: '**', component: ComparadorDeTaxasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
