import { LOCALE_ID, Pipe, InjectionToken, Inject } from '@angular/core';
import { NgModule, PipeTransform }             from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CURRENCY_NAME } from './helper';
@Pipe({
  name: "myCurrency"
})
export class MyCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe:CurrencyPipe,  @Inject(LOCALE_ID) private localeId, @Inject(CURRENCY_NAME) private currency: string) {}

  transform(value: any, locale = this.localeId, currency = this.currency): string {
     return this.currencyPipe.transform(value, currency, 'symbol', '2.2-2', locale);
  }
}