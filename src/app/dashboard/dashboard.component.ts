import { Component } from '@angular/core';

import { CouchService } from '../shared/couchdb.service';

@Component({
    template: `
        <div>Hi, {{name}}</div>
        <ul>
            <li *ngFor="let user of users">{{user.name}}</li>
        </ul>
    `
})
export class DashboardComponent {
    user = {};
    users:any = [];
    
    constructor(
        private couchService: CouchService
    ) {}
    
    

    
}