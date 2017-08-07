
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users.component';
import { Router, RouterModule } from '@angular/router';
import { CouchService } from '../shared/couchdb.service';
import { UserService } from '../shared/user.service';

describe('Users', () => {
    
    let couchSpy: any, userSpy: any;
    
    const setup = () => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]),FormsModule,CommonModule,HttpModule],
            declarations: [UsersComponent],
            providers:[CouchService,UserService]
        });
        let fixture = TestBed.createComponent(UsersComponent);
        let comp = fixture.componentInstance;
        //let de = fixture.debugElement.query(By.css('#login-status'));
        //let statusElement = de.nativeElement;
        let couchService = fixture.debugElement.injector.get(CouchService);
        let userService = fixture.debugElement.injector.get(UserService);
        let testUsers:any = { 
            users: { rows: [ { doc: { name: 'Test1', _id: 'Test1', roles: [ 'test' ] } }, { doc: { name: 'Test2', _id: 'Test2', roles: [ ] } } ] },
            admins: { testAdmin: 1 }
        };
        return { fixture, comp, couchService, userService, testUsers };
    };
    
    it('Should be a UsersComponent', () => {
        let { comp } = setup();
        console.log(comp.allUsers);
        expect(comp instanceof UsersComponent).toBe(true,'Should create UsersComponent');
    });
    
    it('Should toggle selected property with select', () => {
        let { fixture, comp, testUsers } = setup();
        let users = testUsers.users.rows.map((item:any) => item.doc);
        comp.select(users[0]);
        expect(users[0].selected).toBe(true,'Calling select on unselected object sets selected to true ');
        users[1].selected = true;
        comp.select(users[1]);
        expect(users[1].selected).toBe(false,'Calling select on selected object sets selected to false');
    });
    
    describe('Init',() => {
        it('Should display restricted message for nonadmin', () => {
            let { fixture } = setup();
            let messageElement = fixture.debugElement.query(By.css('.km-message')).nativeElement;
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(messageElement.textContent).toBe('Access restricted to admins','Restricted message displays correctly');
            });
        });
        
        it('Should display table for admin', () => {
            let { fixture, comp, userService } = setup();
            userSpy = spyOn(userService, 'get').and.returnValue({ roles:['_admin'] });
            comp.ngOnInit();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let tableElement = fixture.debugElement.query(By.css('.km-user-table')).nativeElement;
                expect(tableElement.style.display).not.toBe('none','Table is visible');
            });
        });
        
    });
    
    /*
    it('Should display create user message', () => {
        let { fixture, comp, statusElement, couchService, testModel } = setup();
        spy = spyOn(couchService, 'put').and.returnValue(Promise.resolve({id:'org.couchdb.user:' + testModel.name}));
        comp.createUser(testModel);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(statusElement.textContent).toBe('User created: ' + testModel.name,'Create user message displays correctly');
        });
    });
    
    it('Should reject nonmatching passwords', () => {
        let { fixture, comp, statusElement, couchService, testModel } = setup();
        testModel.repeatPassword = 'passwor';
        comp.createUser(testModel);
        fixture.detectChanges();
        expect(statusElement.textContent).toBe('Passwords do not match','Create user message displays correctly');
    });
    
    it('Should greet users', () => {
        let { fixture, comp, statusElement, couchService, testModel } = setup();
        spy = spyOn(couchService, 'post').and.returnValue(Promise.resolve({name:testModel.name}));
        comp.login(testModel);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(statusElement.textContent).toBe('Hi, ' + testModel.name + '!','Create user message displays correctly');
        });
    });
    
    it('Should message when user & password do not match', () => {
        let { fixture, comp, statusElement, couchService, testModel } = setup();
        spy = spyOn(couchService, 'post').and.returnValue(Promise.reject({}));
        comp.login(testModel);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(statusElement.textContent).toBe('Username and/or password do not match');
        });
    });
    */
    
});