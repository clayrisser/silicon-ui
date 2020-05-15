include node_modules/gnumake/gnumake.mk

.PHONY: all
all: build

.PHONY: install
install:
	# @$(NPM) install
node_modules: package.json
	@$(MAKE) -s install

.PHONY: prepare
prepare:
	@

.PHONY: format
format: node_modules
	-@eslint --fix --ext .ts,.tsx . >/dev/null || true
	@prettier --write ./**/*.{json,md,scss,yaml,yml,js,jsx,ts,tsx} --ignore-path .gitignore
	@$(MKDIRP) node_modules/.make && $(TOUCH) -m node_modules/.make/format
node_modules/.make/format: $(shell $(GIT) ls-files | $(GREP) "\/[^.]+\.(j|t)sx?$$")
	@$(MAKE) -s format

.PHONY: spellcheck
spellcheck: node_modules/.make/format
	-@cspell --config .cspellrc src/**/*.ts src/**/*.tsx
	@$(MKDIRP) node_modules/.make && $(TOUCH) -m node_modules/.make/spellcheck
node_modules/.make/spellcheck: $(shell $(GIT) ls-files | $(GREP) "\/[^.]+\.(j|t)sx?$$")
	-@$(MAKE) -s spellcheck

.PHONY: lint
lint: src/generated/apollo.tsx
	# -@lockfile-lint --type npm --path package-lock.json --validate-https 2>$(NULL) || $(TRUE)
	-@tsc --allowJs --noEmit
	-@eslint --ext .ts,.tsx .
	@eslint -f json -o node_modules/.tmp/eslintReport.json --ext .ts,.tsx ./
node_modules/.tmp/eslintReport.json: $(shell $(GIT) ls-files | $(GREP) "\/[^.]+\.(j|t)sx?$$")
	-@$(MAKE) -s lint

.PHONY: test
test: node_modules/.tmp/eslintReport.json
	@jest --json --outputFile=node_modules/.tmp/jestTestResults.json --coverage --coverageDirectory=node_modules/.tmp/coverage --testResultsProcessor=jest-sonar-reporter --collectCoverageFrom='["src/**/*.{js,jsx,ts,tsx}","!src/**/*.story.{js,jsx,ts,tsx}"]' $(ARGS)
node_modules/.tmp/coverage/lcov.info: $(shell $(GIT) ls-files | grep -E "\.(j|t)sx?$$")
	-@$(MAKE) -s test

.PHONY: coverage
coverage: node_modules/.tmp/eslintReport.json
	@jest --coverage --coverageDirectory=node_modules/.tmp/coverage --collectCoverageFrom='["src/**/*.{js,jsx,ts,tsx}","!src/**/*.story.{js,jsx,ts,tsx}"]' $(ARGS)

.PHONY: test-watch
test-watch: src/generated/apollo.tsx node_modules
	@jest --watch --collectCoverageFrom='["src/**/*.{js,jsx,ts,tsx}","!src/**/*.story.{js,jsx,ts,tsx}"]' $(ARGS)

.PHONY: test-ui
test-ui: src/generated/apollo.tsx node_modules
	@majestic $(ARGS)

.PHONY: clean
clean:
	-@jest --clearCache
	@$(GIT) clean -fXd \
		-e \!/packages/atoms/node_modules \
		-e \!/packages/atoms/node_modules/**/* \
		-e \!/packages/atoms/package-lock.json \
		-e \!/packages/atoms/pnpm-lock.yaml \
		-e \!/packages/atoms/yarn.lock
	-@$(RM) -rf node_modules/.cache || true
	-@$(RM) -rf node_modules/.make || true
	-@$(RM) -rf node_modules/.tmp || true

.PHONY: build
build: lib
lib: node_modules/.tmp/coverage/lcov.info $(shell $(GIT) ls-files)
	-@$(RM) -r lib node_modules/.tmp/lib
	@babel src -d lib --extensions '.ts,.tsx' --source-maps inline
	@tsc -d --emitDeclarationOnly
	@$(CP) -r node_modules/.tmp/lib/src/. lib

.PHONY: web
web: node_modules node_modules/.tmp/coverage/lcov.info
	$(RM) -rf node_modules/.tmp/action
	$(MKDIRP) -p node_modules/.tmp/action
	$(TOUCH) -m node_modules/.tmp/action/web
	@node ./node_modules/@storybook/react/bin --ci -c storybook -p 3000 -s public
	$(RM) node_modules/.tmp/action/web

.PHONY: expo
expo:
	$(RM) -rf node_modules/.tmp/action
	$(MKDIRP) node_modules/.tmp/action
	$(TOUCH) -m node_modules/.tmp/action/expo
	@rnstl --pattern **/*.story.tsx
	@expo start -c
	$(RM) node_modules/.tmp/action/expo

.PHONY: purge
purge: clean
	@git clean -fXd

.PHONY: report
report: spellcheck lint test
	@

%:
	@
