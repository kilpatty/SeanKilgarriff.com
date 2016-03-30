#!/bin/sh
letsencrypt certonly

crond -l 2 -f
