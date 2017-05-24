import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-router.module.ts';

import { CouchService } from './shared/couchdb.service';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ CouchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
