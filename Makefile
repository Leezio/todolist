.PHONY: autocompile
autocompile:
	npx tsc --watch

.PHONY: lint
lint:
	npm run lint

.PHONY: start
start:
	npx parcel src/index.html