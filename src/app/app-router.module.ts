import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './shared/auth-guard.service';

export const routes: Routes = [
    { path:'',redirectTo:'dashboard',pathMatch:'full' },
    { path:'login',loadChildren:'./login/login.module#LoginModule' },
    { path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule', canActivate:[AuthService] }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}