import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component'
import { NewLoginComponent } from './newLogin.component'

const routes: Routes = [
    { path:'', component:LoginComponent },
    { path:'newuser', component:NewLoginComponent }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LoginRouterModule {}