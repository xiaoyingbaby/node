var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();


//任务1：清理目录
gulp.task('clean', function(){
	gulp.src(['./dist/html','./dist/js','./dist/css'])
		.pipe($.clean());
});

//任务2：合并+压缩js
gulp.task('min-js', function(){
	gulp.src('./src/js/*.js')
		.pipe($.concat('all.min.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('./dist/js'));
});

//任务3：制作雪碧图、生成css
gulp.task('sprite',function(){
    gulp.src('./src/img/icon/*')
        .pipe($.spritesmith({
            imgName:'img/sprite.png',   //保存合并后图片的地址
            cssName:'css/sprite.css',   //保存合并后对于css样式的地址
            padding:2,					//每个图片之间的间距，默认为0
            algorithm:'top-down',	//如何排布合并图片，默认“binary-tree” 可选参数有：top-down、left-right、diagonal、alt-diagonal、binary-tree
            cssTemplate:"./src/sprite/temp.css"
        }))
        .pipe(gulp.dest('./dist'));
})

//任务4：编译scss
gulp.task('compile-scss', function(){
	gulp.src('./src/scss/*.scss')
		.pipe($.sass())
		.pipe(gulp.dest('./src/css'));
});

//任务5：合并+压缩css
gulp.task('min-css', function(){
	gulp.src(['./src/css/*.css','./dist/css/sprite.css'])
		.pipe($.concat('all.min.css'))
		.pipe($.csso())
		.pipe(gulp.dest('./dist/css'));
});

//任务6：压缩html
gulp.task('min-html', function(){
	gulp.src('./src/html/*.html')
		.pipe($.minifyHtml())
		.pipe(gulp.dest('./dist/html'));
});

//任务7：监控文件，若有变化自动执行任务
gulp.task('watch', function() {
	gulp.watch('./src/js/*.js', ['min-js']);
	gulp.watch('./src/scss/*.scss', ['compile-scss']);
	gulp.watch('./src/css/*.css', ['min-css']);
	gulp.watch('./src/html/*.html', ['min-html']);
});

//任务8：文件变化，自动刷新浏览器
gulp.task('browser-sync', function(){
    browserSync.init({
    	files:['**'],
        server:{
            baseDir: './dist',  // 设置服务器的根目录
            index:'./html/index.html' // 指定默认打开的文件
        },
        port:8080  // 指定访问服务器的端口号
    });
});

//任务9：调试/开发任务组，开发过程中监控修改自动编译+刷新浏览器
//gulp.task('dev', ['watch', 'browser-sync']);


//任务10：打包任务组,大改动/第一次生成发布时用，同步执行/队列执行
gulp.task('pack', function(cb) {
    runSequence(
        'clean', 	//第一步：清理目标目录
        'sprite',	//第二步：生成雪碧图
        'compile-scss',		//第三部：编译scss
        ['min-js', 'min-css', 'min-html'], //第四步：压缩三大文件
        'watch', // 第五步：监控
        'browser-sync',		//第六步：刷新浏览器
        cb
    );
});








