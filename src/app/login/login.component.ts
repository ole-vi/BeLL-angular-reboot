import { Component, Input } from '@angular/core';

@Component({
    template: `
        <login-form [createMode]="createMode"></login-form>
    `
})
export class LoginComponent { 
    createMode:boolean = false;
}