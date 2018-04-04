var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
var scss = require("gulp-scss");
var browserSync = require("browser-sync");

//压缩js
gulp.task("min-js", function(){
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

//合并js
gulp.task("concat-js", function(){
	gulp.src("src/js/*.js")
		.pipe(concat("all.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

//压缩css
gulp.task("min-css", function(){
	gulp.src("src/css/*.css")
		.pipe(cleanCss())
		.pipe(gulp.dest("dist/css"));
});

//合并css
gulp.task("concat-css", function(){
	gulp.src("src/css/*.css")
		.pipe(concat("all.min.css"))
		.pipe(cleanCss())
		.pipe(gulp.dest("dist/css"));
});

//编译+压缩scss
gulp.task("compile-scss", function(){
	gulp.src("src/scss/*.scss")
		.pipe(scss())
		.pipe(cleanCss())				//压缩css
		.pipe(gulp.dest("src/css"));	//输出到src/scss目录
});

//监控文件自动编译
gulp.task("auto", function() {
	gulp.watch("src/js/*.js", ["min-js","concat-js"]);
	gulp.watch("src/scss/*.scss", ["compile-scss"]);
	gulp.watch("src/css/*.css", ["concat-css"]);
});

//自动刷新浏览器
gulp.task("browser-sync",function(){
    browserSync.init({
    	files:["**"],
        server:{
            baseDir: './'//,  // 设置服务器的根目录
            //index:'dist/test.html' // 指定默认打开的文件
        },
        port:8080  // 指定访问服务器的端口号
    });
});


//默认组合任务
gulp.task("default", ["auto","browser-sync"]);


