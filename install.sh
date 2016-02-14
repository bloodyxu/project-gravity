#!/usr/bin/bash
# 检测是否全局安装Gulp
if test -e /usr/local/bin/gulp
    then
        echo "已经全局安装Gulp，正在安装项目依赖"
        # 做为项目依赖安装
        npm install gulp --save-dev
    else
        echo "尚未全局安装Gulp，正在全局安装Gulp"
        # 安装全局的Gulp
        npm install gulp --global
        npm install gulp --save-dev

fi
# 安装项目依赖包
npm install gulp-sketch --save-dev
npm install gulp-server-livereload --save-dev
npm install gulp-less --save-dev
npm install gulp-shell --save-dev
