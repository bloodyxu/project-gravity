var gulp = require('gulp');
var sketch = require('gulp-sketch');
var template = require('gulp-template');
var filelist = require('gulp-filelist');
var server = require('gulp-server-livereload');
var less = require('gulp-less');

//监视sketch源文件的改动
gulp.task('auto', function() {
    gulp.watch('src/*.sketch', ['export_artboards'])
})

//导出指定画板为@2x PNG文件
gulp.task('export_artboards', function() {
    return gulp.src('./src/*.sketch') //监视src目录下所有sketch文件
        .pipe(sketch({
            export: 'artboards', //导出类型为artboard
            //items: 'home', //导出的artboard名称
            formats: 'png', //导出的格式
            scales: '2.0' //导出@2x尺寸：需要在sketch中设定好输出尺寸
        }))
        .pipe(filelist('list.json', {
            flatten: true
        }))
        .pipe(gulp.dest('./dist/images/')); //将导出的png文件放在dist/images/目录下
    //return gulp.src('./dist/images/*.png');

});

gulp.task('file2json', function() {
    gulp.src('./dist/images/*.png')
        .pipe(filelist('list.json', {
            flatten: true
        }))
        .pipe(gulp.dest('./dist/images/'))
});


//创建web服务器和livereload
gulp.task('design_server', function() {
    gulp.src('./dist/') //监视路径
        .pipe(server({
            defaultFile: 'index.html', //设定默认文件为index.html
            livereload: true,
            directoryListing: false,
            open: true
        }));
});



//编译less文件
gulp.task('less', function() {
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
    return gulp.src('./src/*.sketch')
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
            defaultFile: 'index.html', //设定默认文件为index.html
            livereload: true,
            directoryListing: true,
            //open: true,
        }));
});



//执行gulp design开始设计任务
gulp.task('design', ['auto', 'export_artboards', 'design_server']);
//执行gulp dev开始开发任务
gulp.task('dev', ['auto', 'less', 'watch_less', 'dev_server', 'export_slices']);