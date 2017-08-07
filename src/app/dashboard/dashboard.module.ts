import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { DashboardRouterModule } from './dashboard-router.module'

@NgModule({
  imports: [
    DashboardRouterModule,CommonModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}