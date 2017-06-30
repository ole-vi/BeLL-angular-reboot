import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomeComponent } from './home.component'

const routes: Routes = [
    { path:'', component:HomeComponent,
        children: [
            { path:'', component:DashboardComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouterModule {}