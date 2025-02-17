import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { DatePickerModule } from 'primeng/datepicker';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { ScrollTopModule } from 'primeng/scrolltop';
import {  HttpClientModule } from '@angular/common/http';
import { KnobModule } from 'primeng/knob';
import { HomeComponent } from './home/home.component';

import { AutoFocusModule } from 'primeng/autofocus';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    ProgressSpinnerModule,
    ReactiveFormsModule,
    PaginatorModule,
    ScrollPanelModule,
    ImageModule,
    CardModule,
    InputTextModule,
    KnobModule,
    ToolbarModule,
    AutoFocusModule,
    HttpClientModule,
    ToastModule,
    ScrollTopModule,
    InputGroupModule,
    SpeedDialModule,
    InputGroupAddonModule,
    DatePickerModule,
    ToggleButtonModule,
    InputIconModule,
    IconFieldModule,
    BrowserModule,
    AppRoutingModule ,
    ButtonModule ,
    TableModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule ,
  ],
  providers: [
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura,
          options: {
            darkModeSelector: '.my-app-dark',
        }
      }
  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
