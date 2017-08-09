#!/bin/bash

vagrant halt
vagrant destroy -f
rm -rf .vagrant/ build/  node_modules/ npm-debug.log* add-cors-to-couchdb/
echo "we are now ready for ..."
echo "vagrant up"
