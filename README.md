# BeLL apps Angular reboot prototype

Project to create a prototype for a reboot of the BeLL apps using Angular & CouchDB.

## To work on this

First, make sure you have [CouchDB 2.0](http://couchdb.apache.org/) and [NodeJS](https://nodejs.org/en/) installed.

Once CouchDB is installed, run the `curl` commands found at the bottom of [this page](http://docs.couchdb.org/en/latest/install/index.html) to set up system databases. Then go into its dashboard at `http://127.0.0.1:5984/_utils` and enable CORS by clicking __Configuration__ -> __CORS__, click the __Enable CORS__ button and add `http://localhost:3000` and/or `http://127.0.0.1:3000` to the list.

```
curl -X PUT http://127.0.0.1:5984/_users
curl -X PUT http://127.0.0.1:5984/_replicator
curl -X PUT http://127.0.0.1:5984/_global_changes

```

Then clone this repo and run `npm install` to install all dependencies.  There are two scripts of use for the command line, as well:

`npm test`
Will run unit tests

`npm run watch`
Will build the app, run tslint on all files, and start up a node server at `localhost:3000`.  It will also watch for changes to all files in `src` and rebuild on changes.

## Current features

Currently project only includes a login/create user page with username & password fields.

## TODOs

* Create vagrant file for quick setup of dependencies, then create docker file
* Incorporate SSL so site runs on HTTPS
* Add Service Workers & PouchDB (see [this repo](https://github.com/nolanlawson/worker-pouch)) for offline support
* Add e2e tests with Protractor or CodeceptJS
* Add user management component
