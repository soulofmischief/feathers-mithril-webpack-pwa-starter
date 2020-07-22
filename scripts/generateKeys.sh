#!/usr/bin/env bash

dest='./packages/local/cert'

mkdir -p "$dest"

openssl req -nodes -new -x509 \
-keyout "$dest/privatekey.pem" \
-out "$dest/certificate.pem"
