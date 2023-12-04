import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StyleClassModule} from 'primeng/styleclass';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AnimateModule } from 'primeng/animate';
import { SpeedDialModule } from 'primeng/speeddial';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DragDropModule } from 'primeng/dragdrop';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    CheckboxModule,
    StyleClassModule,
    SplitterModule,
    SidebarModule,
    CarouselModule,
    ScrollTopModule,
    AnimateModule,
    SpeedDialModule,
    DragDropModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
