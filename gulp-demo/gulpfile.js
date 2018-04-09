var gulp = require("gulp");
var del = require("del");
var rename = require("gulp-rename");
var htmlMinify = require("gulp-html-minify");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var scss = require("gulp-sass");
var browserSync = require("browser-sync");
var autoprefixer = require('gulp-autoprefixer');
var imgMin = require('gulp-imagemin');	//cnpm安装有问题，请用npm

//文件清理
gulp.task("del", function(){
	del("./src/tes*/");
});

//文件重命名
gulp.task("rename", function(){
	gulp.src("./src/test/t-1.html")
		.pipe(rename("r-1.html"))
		.pipe(gulp.dest("./dist/rename"));
});

//压缩图片
gulp.task("min-img",function(){
	gulp.src("./src/img/*.{png,jpg,gif,ico}")
        .pipe(imgMin({
            optimizationLevel: 7, 	//类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, 		//类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, 		//类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true 		//类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
	    .pipe(gulp.dest("./dist/img"));
});

//压缩html
gulp.task("min-html", function(){
	gulp.src("src/html/*.html")
		.pipe(htmlMinify())
		.pipe(gulp.dest("dist/html"));
});

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

//css添加前缀
gulp.task("pre-css",function(){
	gulp.src("./src/css/*.css")
		.pipe(autoprefixer({
	        browsers: ["last 2 versions", "ie 8"],      // 浏览器版本
	        cascade: true,                       		// 美化属性，默认true
	        add: true,                          		// 是否添加前缀，默认true
	        remove: true,                        		// 删除过时前缀，默认true
	        flexbox: true                       		// 为flexbox属性添加前缀，默认true
	    }))
	    .pipe(gulp.dest("./dist/css"));
});

//压缩css
gulp.task("min-css", function(){
	gulp.src("src/css/*.css")
		.pipe(csso())
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
		//.pipe(cleanCss())				//压缩css
		.pipe(gulp.dest("src/css"));	//输出到src/scss目录
});

//监控文件自动编译
gulp.task("auto", function() {
	gulp.watch("src/js/*.js", ["concat-js"]);
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


