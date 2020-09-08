/** @format */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { comparadorDeTaxasModule } from './comparador-de-taxas/comparador-de-taxas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, comparadorDeTaxasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
