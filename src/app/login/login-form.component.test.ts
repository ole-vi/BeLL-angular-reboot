import * as test from 'tape';
import 'core-js/es7/reflect';

import { LoginFormComponent } from './login-form.component';
import { CouchService } from '../shared/couchdb.service';

import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

var couchdb = new CouchService(new Http(new MockBackend(),new BaseRequestOptions()));

test('Login form component should exist', (t) => {
    var comp = new LoginFormComponent(couchdb);
    t.notEqual(typeof comp,'undefined', 'Type of component <> "undefined"');
    t.end();
});

test('Login form model should initialize', (t) => {
    var comp = new LoginFormComponent(couchdb);
    t.equal(comp.model.name,'', 'model.name is empty string');
    t.equal(comp.model.password,'', 'model.password is empty string');
    t.equal(comp.model.repeatPassword,'', 'model.repeatPassword is empty string');
    t.end();
});

test('Create user form should acknowledge mismatched passwords', (t) => {
    var comp = new LoginFormComponent(couchdb);
    comp.model.password = 'password';
    comp.model.repeatPassword = 'pasword';
    comp.createUser();
    t.equal(comp.message,'Passwords do not match','Message shows passwords do not match');
    t.end();
});