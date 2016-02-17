#!/usr/bin/bash

mkdir src
mkdir src/images
mkdir src/fonts
mkdir src/styles
touch src/styles/style.less
mkdir src/resources

mkdir dist
mkdir dist/images
cp "./template.html" "./dist/"

echo '项目结构建立完成'
