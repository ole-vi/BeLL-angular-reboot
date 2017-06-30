import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './shared/auth-guard.service';

export const routes: Routes = [
    { path:'',loadChildren:'./home/home.module#HomeModule', canActivate:[AuthService],pathMatch:'full' },
    { path:'login',loadChildren:'./login/login.module#LoginModule' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}