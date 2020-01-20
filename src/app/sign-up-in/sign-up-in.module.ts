import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpInComponent } from './sign-up-in.component';
import {SignInComponent } from './sign-in/sign-in.component';
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    SignUpInComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SignUpInComponent
  ]
})
export class SignUpInModule { }
