import test from 'tape';
import { AppComponent } from './app.component';

test('App component', (t) => {
    var app = new AppComponent();
    t.notEqual(typeof app,'undefined');
    t.end();
});