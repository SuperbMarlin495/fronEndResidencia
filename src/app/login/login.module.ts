import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StyleClassModule} from 'primeng/styleclass';
import { PrimeNGConfig } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    StyleClassModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule
  ],
  providers: []
})
export class LoginModule { }
