/bin/cp -rf ./LICENSE ./dist/libs/metric-units/
/bin/cp -rf ./README.md ./dist/libs/metric-units/
cd dist/libs/metric-units
npm publish --tag=latest --access public
