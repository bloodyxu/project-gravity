#!/usr/bin/bash

# 下载nodejs安装包
curl -O https://nodejs.org/dist/v4.3.0/node-v4.3.0.pkg
# 安装nodejs
sudo installer -store -pkg "./node-v4.3.0.pkg" -target "/"

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

<<<<<<< HEAD
echo "开始安装sketchtool"
cd sketchtool
sh ./install.sh
cd ../
echo "sketchtool安装完毕"

=======
>>>>>>> bloodyxu/master
# 安装项目依赖包
echo "开始安装依赖宝"
npm install gulp-sketch --save-dev
npm install gulp-server-livereload --save-dev
npm install gulp-less --save-dev
npm install gulp-shell --save-dev
<<<<<<< HEAD
npm install gulp-filelist
echo "工作环境部署完成"
=======

rm node-v4.3.0.pkg
>>>>>>> bloodyxu/master
