#! /bin/bash
DOCKER_BUILDKIT=1 docker build --target --build-arg GH_TOKEN= releaser .