import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdIconModule , MdTableModule, MdSnackBarModule, MdCardModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { TransactionService } from './services/rest.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdIconModule,
    MdTableModule,
    MdCardModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
