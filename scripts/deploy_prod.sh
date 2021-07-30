#!/bin/bash

git pull
yarn
quasar build
chown -R worker:www-data .
chmod -R u+rwX,go+rX,go-w .
