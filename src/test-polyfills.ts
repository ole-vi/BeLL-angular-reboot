
import 'core-js/es6';
import 'core-js/es7/reflect';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const document = new JSDOM(`<!DOCTYPE html>`);
const window = document.window;

//console.log(window);

require('zone.js/dist/zone-node');

module.exports = document;



