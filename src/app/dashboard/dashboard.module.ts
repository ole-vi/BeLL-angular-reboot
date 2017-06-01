import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import { DashboardRouterModule } from './dashboard-router.module.ts'

@NgModule({
  imports: [
    DashboardRouterModule,CommonModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}