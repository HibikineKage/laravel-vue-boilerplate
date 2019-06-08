.PHONY: clean
clean:
	echo "clean"

.PHONY: php-bash
php-bash:
	docker-compose exec app bash

.PHONY: start
start:
	docker-compose up --build
