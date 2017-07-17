import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';

require('./home.scss');

// Main page once logged in.  At this stage is more of a placeholder.
@Component({
    template: `
        <main-navigation></main-navigation>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
export class HomeComponent {}