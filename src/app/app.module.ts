import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './product/detail/detail.component';
import { ListComponent } from './product/list/list.component';
import { Page404Component } from './layouts/page404/page404.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    LoginComponent,
    LayoutsComponent,
    CartComponent,
    DetailComponent,
    ListComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
