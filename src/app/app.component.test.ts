import * as test from 'tape';
import 'core-js/es7/reflect';

import { AppComponent } from './app.component';

test('App component should exist', (t) => {
    var app = new AppComponent();
    t.notEqual(typeof app,'undefined', 'Type of app <> "undefined"');
    t.end();
});