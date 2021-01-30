#!/bin/bash

git pull
yarn
quasar build
chown -R mpalade:nobody .
chmod -R u+rwX,go+rX,go-w .
