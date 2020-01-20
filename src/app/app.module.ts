import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { ProductMainModule } from './product-main/product-main.module';
import { SignUpInModule } from './sign-up-in/sign-up-in.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductMainModule,
    SignUpInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
