#!/bin/bash

docker build -t dockerfile_database &&
docker build -t dockerfile_backend &&
docker build -t dockerfile_reverseproxy &&

docker images
