xcopy .\LICENSE .\dist\libs\metric-units\ /Y
xcopy .\README.md .\dist\libs\metric-units\ /Y
cd dist/libs/metric-units
npm publish --tag=latest --access public
