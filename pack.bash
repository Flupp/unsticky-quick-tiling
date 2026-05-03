#!/bin/bash

set -Ceux

cd package

zip ../unsticky-quick-tiling.kwinscript  \
	contents/code/main.js  \
	LICENSE  \
	metadata.json
