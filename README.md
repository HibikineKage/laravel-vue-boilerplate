# Laravel Docker Boilerplate

## Requirements

- Docker
- Docker Compose
- node > 8

## Install

```bash
npm run dev-init
```

### バックグラウンドでDocker立てる

```bash
npm run start -- -d
```

### composerを叩く

docker立ってる前提

```bash
npm run composer install
```

### npm i

```bash
npm run npm-docker i
```

### Nginx Reload

```bash
docker-compose exec web nginx -s reload
```
