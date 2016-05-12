# PROJECT-GRAVITY
## Intro
**帮助设计师提升设计与生产效率**

**可以做什么**
- 由于Sketch内置的localshare功能在浏览器中预览的时候不支持2x，所以用Gulp写了一个在浏览器中预览2x设计图的工具


## Install
### 依赖工具
- node.js
- gulp
- sketchtool

首先需要具备node运行环境，可以在nodejs上下载node安装包


### 初始化
在项目文件夹下先运行init.sh进行项目目录结构的初始化，init.sh将产生如下的项目目录

```
new_project
	|--dist
		|--images
		|--index.html
	|--src
		|--fonts
		|--images
		|--resources
		|--styles
	|--preview
	|--sketch-doc
```
目录说明：
#####/

#####dist

#####src
将所有的字体，图片，以及其它资源放在此目录下
#####sketch-doc
将sketch设计源文件放置在此目录下
#####preview
自动生成的预览文件在此目录下

###第二步运行install.sh
将为系统和项目安装以下依赖工具：

- gulp
- gulp-sketch
- gulp-server-livereload
- gulp-filelist
- broswer-sync



## Use
