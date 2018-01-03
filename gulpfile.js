'use strict';

/*
	安装gulp、gulp-sass
	目的：sass->css

	gulp的使用
		* gulp.task(name,callback)
		* gulp.src(path)
		* gulp.dest()
		* gulp.watch(path,tasks)
	匹配：
		* 一个星“*”匹配所有文件
		* 两个星“**”匹配所有文件夹
 */

// 在此处使用gulp、gulp-sass
// 模块化：require()

// 引入gulp模块，得到一个对象/函数
let gulp = require('gulp');
let sass = require('gulp-sass');


let path = {
	sass:'./src/sass/*.scss',
	js:'./src/js/*.js'
}


// 创建任务
// 编译sass文件
gulp.task('compileSass',function(){
	// 返回文件流
	gulp.src(path.sass)

		// 编译
		.pipe(sass({outputStyle:'compact'}))

		// 输出
		.pipe(gulp.dest('./src/css'))
});

// 自动化任务
// 监听sass文件修改，自动编译
gulp.task('jtSass',function(){
	// 监听这个文件，当文件有修改时，执行响应任务
	gulp.watch(path.sass,['compileSass']);
});


// 合并压缩js文件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('mergeJs',function(){
	// 找到js文件所在位置
	gulp.src('./dist/*.js')

		// 合并所有js文件
		.pipe(concat('page.js'))

		// 输出
		.pipe(gulp.dest('./dist/'))

		// 压缩
		.pipe(uglify())

		// 重命名
		.pipe(rename({suffix: ".min"}))

		// 输入压缩后的文件
		.pipe(gulp.dest('./dist/'))
});