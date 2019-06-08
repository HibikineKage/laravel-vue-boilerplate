# Laravel Docker Boilerplate

## Requirements

- Docker
- Docker Compose
- node > 8

## Install

```bash
npx dev-init
```

### バックグラウンドでDocker立てる

```bash
npx start -- -d
```

### composerを叩く

docker立ってる前提

```bash
npx composer install
```

### npm i

```bash
npx npm-docker i
```

### Nginx Reload

```bash
docker-compose exec web nginx -s reload
```
