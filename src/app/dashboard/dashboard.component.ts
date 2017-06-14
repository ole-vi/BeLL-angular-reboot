import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';

@Component({
    template: `
        <div>Hi, {{name}}</div>
    `
})
export class DashboardComponent implements OnInit {
    name = '';
    roles:string[] = [];
    
    constructor(
        private userService: UserService
    ) {}
    
    ngOnInit() {
        Object.assign(this,this.userService.get());
    }
}