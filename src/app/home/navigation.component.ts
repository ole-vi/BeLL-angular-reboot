import { Component } from '@angular/core';

import { CouchService } from '../shared/couchdb.service';
import { Router } from '@angular/router';

@Component({
    selector:'main-navigation',
    template: `
        <ul>
            <li *ngFor="let comp of components"><a [routerLink]="comp.link">{{comp.name}}</a></li>
        </ul>
        <button class="km-logout" (click)="logoutClick()">Logout</button>
    `
})
export class NavigationComponent {
    constructor(
        private couchService:CouchService,
        private router:Router
    ){}

    components = [
        { link:'/', name:'Home' },
    ];
        
    logoutClick() {
        this.couchService.delete('_session',{ withCredentials:true }).then((data:any) => {
            if(data.ok === true) {
                this.router.navigate(['/login'], {});
            }
        });
    }
    
}