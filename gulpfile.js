var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var server = require('gulp-server-livereload');
var less   = require('gulp-less');

//---------------------------------------------------------------------
//      gulp design
//---------------------------------------------------------------------

//监视sketch文件改动，并执行export_artboards任务
//gulp-sketch插件自带了监视sketch源文件改动的功能，不需要再watch了

//gulp.task('auto_design', function() {
//    gulp.watch('sketch-doc/*.sketch', ['export_artboards'])
//})


//导出指定画板为@2x PNG文件
gulp.task('export_artboards', function(){
  return gulp.src('./sketch-doc/*.sketch') //监视src目录下所有sketch文件
    .pipe(sketch({
      export: 'artboards', //导出类型为artboard
      //items: 'home',     //需要导出某个特定artboards的时候使用
      formats: 'png',      //导出的格式
      scales: '1.0, 2.0'   //导出@2x尺寸：需要在sketch中设定好输出尺寸
    }))
    .pipe(gulp.dest('./preview/artboards/')); //将导出的png文件放在preview/artboards/目录下
});

//创建web服务器和livereload
gulp.task('design_server', function() {
  gulp.src('preview') //监视路径
    .pipe(server({
        defaultFile: 'index.html', //设定默认文件为index.html
        livereload: true,
        //directoryListing: true, //目录列表如果开启，则defaultFile选项失效
        open: true
    }));
});





//---------------------------------------------------------------------
//      gulp dev
//---------------------------------------------------------------------

//监视sketch文件改动，并执行export_slices任务
//gulp.task('auto_dev', function() {
//    gulp.watch('sketch-doc/*.sketch', ['export_slices'])
//})

//导出sketch中已经定义好的资源
gulp.task('export_slices', function() {
    return gulp.src('./sketch-doc/*.sketch')
        .pipe(sketch({
            export: 'slices',
            formats: 'png',
            scales: '1.0, 2.0'
        }))
        .pipe(gulp.dest('./src/images/'));
})

//编译less文件
gulp.task('less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/styles/'))
})

//监视less文件
gulp.task('watch_less', function() {
    gulp.watch('./src/styles/*.less', ['less']);
})

//创建dev_server服务器，不能与design_server同时使用
gulp.task('dev_server', function() {
  gulp.src('src') //监视路径
    .pipe(server({
        defaultFile: 'index.html', //设定默认文件为index.html
        livereload: true,
        //directoryListing: true,  //开发模式下默认不打开目录列表
        //open: true, //开发模式下默认不开启浏览器
    }));
});


//执行gulp design开始设计任务
gulp.task('design', ['export_artboards', 'design_server']);

//执行gulp dev开始开发任务
gulp.task('dev', ['export_slices', 'less', 'watch_less', 'dev_server']);
