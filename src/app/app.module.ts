import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CurrencyPipe } from '@angular/common';
import { MyCurrencyPipe } from './my-currency.pipe'
import { LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { CURRENCY_NAME } from './helper'

@NgModule({
  imports: [ BrowserModule ],
  providers: [ { provide: LOCALE_ID, useValue: 'fi' }, CurrencyPipe, {provide: CURRENCY_NAME, useValue: 'GBP'} ],
  declarations: [ AppComponent, MyCurrencyPipe],
  bootstrap: [ AppComponent ]
})

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/