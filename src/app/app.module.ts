import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-router.module';

import { CouchService } from './shared/couchdb.service';
import { AuthService } from './shared/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ 
    CouchService, AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
