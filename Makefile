build:
	yarn workspace @jlg/styled-media build
	yarn workspace @jlg/styled-components build
	yarn workspace @jlg/docs-styled build

update:
	npx ncu -u --dep dev,prod --packageFile ./package.json
	npx ncu -u --dep dev,prod --packageFile ./docs/styled/package.json
	npx ncu -u --dep dev,prod --packageFile ./packages/jlg-styled-components/package.json
	npx ncu -u --dep dev,prod --packageFile ./packages/jlg-styled-media/package.json
