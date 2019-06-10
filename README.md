# Laravel Docker Boilerplate

[![CircleCI](https://circleci.com/gh/HibikineKage/laravel-vue-boilerplate.svg?style=svg)](https://circleci.com/gh/HibikineKage/laravel-vue-boilerplate)

## Requirements

- Docker
- Docker Compose
- node > 8

## Install

```bash
npm run dev-init
npm start
```

### バックグラウンドでDocker立てる

```bash
npm run start -- -d
```

### composerを叩く

docker立ってる前提

```bash
npm run composer -- install
```

### npm i

```bash
npm run npm-docker -- i hoge
```

### Nginx Reload

```bash
docker-compose exec web nginx -s reload
```
