var gulp     = require('gulp');
var sketch   = require('gulp-sketch');
var filelist = require('gulp-filelist');
var server   = require('gulp-server-livereload');

//监视sketch源文件的改动
gulp.task('watch-sketch', function() {
    gulp.watch('sketch-doc/*.sketch', ['export_artboards'])
})

//导出指定画板为@2x PNG文件
gulp.task('export_artboards', function() {
    return gulp.src('./sketch-doc/*.sketch') //监视src目录下所有sketch文件
        .pipe(sketch({
            export: 'artboards', //导出类型为artboard
            //items: 'home', //导出的artboard名称
            formats: 'png', //导出的格式
            scales: '2.0' //导出@2x尺寸：需要在sketch中设定好输出尺寸
        }))
        .pipe(filelist('list.json', {
            flatten: true
        }))
        .pipe(gulp.dest('./preview/images/')); //将导出的png文件放在dist/images/目录下
    //return gulp.src('./dist/images/*.png');

});

// 将导出到preview/images/中的图片列表输出为json
gulp.task('file2json', function() {
    gulp.src('./preview/images/*.png')
        .pipe(filelist('list.json', {
            flatten: true
        }))
        .pipe(gulp.dest('./preview/images/'))
});


//创建web服务器和livereload
gulp.task('design_server', function() {
    gulp.src('./preview/') //监视路径
        .pipe(server({
            defaultFile: 'index.html', //设定默认文件为index.html
            livereload: true,
            directoryListing: false,
            open: true
        }));
});


//创建dev_server服务器，不能与design_server同时使用
gulp.task('dev_server', function() {
    gulp.src('preview') //监视路径
        .pipe(server({
            defaultFile: 'index.html', //设定默认文件为index.html
            livereload: true,
            directoryListing: true,
            //open: true,
        }));
});



//执行gulp design开始设计任务
gulp.task('design', ['watch-sketch', 'export_artboards', 'design_server']);
