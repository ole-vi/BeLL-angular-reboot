import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavigationComponent } from './navigation.component';
import { UsersComponent } from '../users/users.component';

import { HomeRouterModule } from './Home-router.module.ts'

@NgModule({
  imports: [
    HomeRouterModule,CommonModule
  ],
  declarations: [
    HomeComponent,DashboardComponent,NavigationComponent,UsersComponent
  ]
})
export class HomeModule {}