import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavigationComponent } from './navigation.component';

import { HomeRouterModule } from './home-router.module'

@NgModule({
  imports: [
    HomeRouterModule,CommonModule
  ],
  declarations: [
    HomeComponent,DashboardComponent,NavigationComponent
  ]
})
export class HomeModule {}