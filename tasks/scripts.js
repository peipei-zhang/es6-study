//处理入口文件index.js
import gulp from 'gulp';
// 处理判断
import gulpif from 'gulp-if';
// 处理连接
import concat from 'gulp-concat';
// webpack
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
//文件重命名
import named from 'vinyl-named';
// 热更新
import livereload from 'gulp-livereload';
//处理文件信息流
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
// 压缩
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])
	.pipe(plumber({
		errorHandle:function(){

		}
	}))
	.pipe(named())
	.pipe(gulpWebpack({
		module:{
			loaders:[{
				test:/\.js$/,
				loader:'babel'
			}]
		}
	}),null,(err,stats)=>{
		log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
			chunks:false
		}))
	})
	.pipe(gulp.dest('server/public/javascript'))
	.pipe(rename({
		basename:'cp',
		extname:'.min.js'
	}))
	.pipe(uglify({
		compress:{properties:false},
		output:{'quote_keys':true}
	}))
	.pipe(gulp.dest('server/public/javascript'))
	.pipe(gulpif(args.watch,livereload()))
})