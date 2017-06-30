import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';

// Main page once logged in.  At this stage is more of a placeholder.
@Component({
    template: `
        <main-navigation></main-navigation>
        <router-outlet></router-outlet>
    `
})
export class HomeComponent {}