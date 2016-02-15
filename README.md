# PROJECT-GRAVITY
## Intro
**帮助设计师提升设计与生产效率**

**可以做什么**
- 自动输出sketch中的画板并用浏览器预览，修改sketch文件后可以自动刷新页面
- 自动输出slices
- 自动编译less

## Install
### 依赖工具
- node.js
- gulp
- sketchtool

首先需要具备node运行环境，可以在nodejs上下载node安装包


### 初始化
在项目文件夹下先运行init.sh进行项目目录结构的初始化，init.sh将产生如下的项目目录

```
new_project/
	|--dist/ --发布文件
		|--images/ --资源素材
		|--index.html
	|--src/ --开发文件
		|--fonts/ --字体
		|--images/ --资源素材
		|--resources/ --其它资源
		|--styles/ --样式文件less/css
	|--preview/ --设计预览文件目录
		|--artboards/ --sketch画板图片
		|--index.html --预览页面
	|--sketch-doc/ --sketch源文件
```

第二步运行install.sh，将为系统和项目安装以下依赖工具：

- gulp
- gulp-sketch
- gulp-server-livereload
- gulp-less
- gulp-shell


## Use
### gulp design
终端下执行gulp design启动设计流程

### gulp dev
终端下执行gulp dev启动开发流程