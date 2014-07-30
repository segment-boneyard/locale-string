include node_modules/make-lint/index.mk
SRC = index.js

test: lint
	@./node_modules/.bin/mocha \
		--reporter spec

node_modules: package.json
		npm install

.PHONY: test