#!/usr/bin/bash
# 检测是否全局安装Gulp
if test -e /usr/local/bin/gulp
    then
        echo "已经全局安装Gulp，正在安装项目依赖"
        # 做为项目依赖安装
        sudo npm install gulp --save-dev
    else
        echo "尚未全局安装Gulp，正在全局安装Gulp"
        # 安装全局的Gulp
        sudo npm install gulp --global
        sudo npm install gulp --save-dev
fi


# 复制sketchtool到/usr/local/bin/
# cp "./sketchtool/bin/sketchmigrate" /usr/local/bin/
# echo Installed `"./sketchtool/bin/sketchmigrate" --version` in "/usr/local/bin"
# 
# cp "./sketchtool/bin/sketchtool" /usr/local/bin/
# mkdir -p /usr/local/share/sketchtool
# cp -r "./sketchtool/share/sketchtool/resources.bundle" /usr/local/share/sketchtool/
# echo Installed `"./sketchtool/bin/sketchtool" --version` in "/usr/local/bin"


# 安装项目依赖包
sudo npm install gulp-sketch --save-dev
sudo npm install gulp-server-livereload --save-dev
sudo npm install gulp-filelist
sudo npm install browser-sync --save-dev
