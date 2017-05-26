import { Component, Input } from '@angular/core';

import { CouchService } from '../shared/couchdb.service';

@Component({
    selector: 'login-form',
    template: `
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <label>Username</label><input [(ngModel)]="model.name" placeholder="Enter username" name="name" />
            <label>Password</label><input [(ngModel)]="model.password" placeholder="Password" name="password" />
            <span *ngIf="createMode"><label>Repeat Password</label><input [(ngModel)]="model.repeatPassword" placeholder="Repeat Password" name="repeatPassword" /></span>
            <a [routerLink]="createMode ? [''] : ['newuser']">{{ createMode ? 'Already have an account?' : 'Are you new?' }}</a>
            <button>{{ createMode ? 'Create User' : 'Login' }}</button>
        </form>
        <div>{{message}}</div>
    `
})
export class LoginFormComponent {
    @Input() createMode:boolean = false;
    model = { name:'', password:'', repeatPassword:'' }
    message = '';
    
    constructor(
        private couchService: CouchService
    ) {}
    
    onSubmit() {
        if(this.createMode) {
            this.createUser();
        } else {
            this.login();
        }
    }
    
    createUser() {
        if(this.model.password === this.model.repeatPassword) {
            this.couchService.put('_users/org.couchdb.user:' + this.model.name, {'name': this.model.name, 'password': this.model.password, 'roles': [], 'type': 'user'})
                .then((data) => this.message = 'User created: ' + data.id.replace('org.couchdb.user:',''), (error) => this.message = '');
        } else {
            this.message = 'Passwords do not match';
        }
    }
    
    login() {
        this.couchService.post('_session', {'name':this.model.name, 'password': this.model.password})
            .then((data) => { 
                this.message = 'Hi, ' + data.name + '!';
            },(error) => this.message = 'Username and/or password do not match');
    }
    
}