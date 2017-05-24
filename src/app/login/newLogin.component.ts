import { Component } from '@angular/core';

@Component({
    template: `
        <login-form [createMode]="createMode"></login-form>
    `
})
export class NewLoginComponent { createMode:boolean = true; }