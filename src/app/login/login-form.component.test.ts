

// OLD TAPE TEST
/*import * as test from 'tape';
import '../../test-polyfills.ts';

import { LoginModule } from './login.module';
import { LoginFormComponent } from './login-form.component';
import { CouchService } from '../shared/couchdb.service';
import { AuthService } from '../shared/auth-guard.service';

import { BaseRequestOptions, Http } from '@angular/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const setup = () => {
    console.log('Init test environment...');
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,platformBrowserDynamicTesting());
    console.log('Configure testing module...');
    TestBed.configureTestingModule({
        imports:[ FormsModule, RouterModule ],
        declarations:[ LoginFormComponent ],
        providers: [ 
            CouchService, AuthService
        ]
    });
    console.log('Ready for launch');
};

const teardown = () => {
    console.log('Powering down...');
    TestBed.resetTestEnvironment();
};

test('Login form component should exist', (t) => {
    setup();
    console.log('Create fixture');
    const fixture = TestBed.createComponent(LoginFormComponent);
    console.log('Component instance');
    const comp = fixture.componentInstance;
    console.log('To the test!');
    t.notEqual(typeof comp,'undefined', 'Type of component <> "undefined"');
    t.end();
    teardown();
});

test('Login form model should initialize', (t) => {
    setup();
    const fixture = TestBed.createComponent(LoginFormComponent);
    const comp = fixture.componentInstance;
    t.equal(comp.model.name,'', 'model.name is empty string');
    t.equal(comp.model.password,'', 'model.password is empty string');
    t.equal(comp.model.repeatPassword,'', 'model.repeatPassword is empty string');
    t.end();
    teardown();
});

test('Create user form should acknowledge mismatched passwords', (t) => {
    setup();
    const fixture = TestBed.createComponent(LoginFormComponent);
    const comp = fixture.componentInstance;
    comp.model.password = 'password';
    comp.model.repeatPassword = 'pasword';
    comp.createUser();
    t.equal(comp.message,'Passwords do not match','Message shows passwords do not match');
    t.end();
    teardown();
});*/