import { Injectable } from '@angular/core';
import { CouchService } from './couchdb.service';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {
    
    constructor(private couchService: CouchService, private router: Router) {}

    private checkUser(): Promise<any> {
        return this.couchService
            .get('_session');
    }
    
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Promise<any> {
        return this.checkUser().then((res:any) => {
            if(res.ok) {
                return true;
            }
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
        });
    }
    
}