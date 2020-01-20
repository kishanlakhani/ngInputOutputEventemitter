import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import  { ProductDetailComponent } from './product-detail/product-detail.component'
import {StockStatusComponent} from './stock-status/stock-status.component'
import { ProductMainComponent } from './product-main.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductMainComponent,
    StockStatusComponent,
    RemoveProductComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports : [
    ProductMainComponent
    // StockStatusComponent,
    // ProductDetailComponent
  ]
})
export class ProductMainModule { }
