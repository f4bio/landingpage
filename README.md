# landingpage

> _a basic term-like start page with tree structure_

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [generate ascii image](#generate-ascii-image)
- [build](#build)
  - [build page](#build-page)
  - [build docker image](#build-docker-image)
  - [push docker image](#push-docker-image)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## generate ascii image

`$ jp2a --width=64 src/profile.jpg`

## build

### build page

`$ npm run lint:fix && npm run build:prod`

### build docker image

`$ docker build --no-cache -t f4bio/landingpage:latest .`

### push docker image

`$ docker push f4bio/landingpage`
