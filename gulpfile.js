var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var server = require('gulp-server-livereload');
var less   = require('gulp-less');

//------gulp design-------------------------------------------------------
//监视sketch源文件的改动
gulp.task('auto', function() {
    gulp.watch('sketch-doc/*.sketch', ['export_artboards', 'export_slices'])
})

//导出指定画板为@2x PNG文件
gulp.task('export_artboards', function(){
  return gulp.src('./sketch-doc/*.sketch') //监视src目录下所有sketch文件
    .pipe(sketch({
      export: 'artboards', //导出类型为artboard
      //items: 'home', //需要导出某个特定artboards的时候使用
      formats: 'png', //导出的格式
      scales: '1.0, 2.0' //导出@2x尺寸：需要在sketch中设定好输出尺寸
    }))
    .pipe(gulp.dest('./preview/artboards/')); //将导出的png文件放在preview/artboards/目录下
});


//创建web服务器和livereload
gulp.task('design_server', function() {
  gulp.src('preview') //监视路径
    .pipe(server({
        defaultFile: './preview/index.html', //设定默认文件为index.html
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

//------gulp dev-------------------------------------------------------
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

//创建dev_server服务器，不能与design_server同时使用
gulp.task('dev_server', function() {
  gulp.src('src') //监视路径
    .pipe(server({
        defaultFile: 'home.html', //设定默认文件为index.html
        livereload: true,
        directoryListing: true,
        //open: true,
    }));
});



//执行gulp design开始设计任务
gulp.task('design', ['auto', 'export_artboards', 'design_server']);
//执行gulp dev开始开发任务
gulp.task('dev', ['auto', 'less', 'watch_less', 'dev_server', 'export_slices']);
