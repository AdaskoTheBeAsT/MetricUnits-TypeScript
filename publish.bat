xcopy .\LICENSE .\dist\libs\metric-units\ /Y
xcopy .\README.md .\dist\libs\metric-units\ /Y
node .\tools\scripts\cleanPackage.mjs
cd dist/libs/metric-units
REM npm publish --tag=latest --access public
