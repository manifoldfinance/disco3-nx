#!/usr/bin/env bash

nx generate @nrwl/js:library --name="$@" --buildable
sleep 1
exit 0