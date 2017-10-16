var gulp         = require('gulp'),
  sass           = require('gulp-sass'),
  sourcemaps     = require('gulp-sourcemaps'),
  browserSync    = require('browser-sync'),
  concat         = require('gulp-concat'),
  uglifyjs       = require('gulp-uglifyjs'),
  csso           = require('gulp-csso'),
  imagemin       = require('gulp-imagemin'),
  pngquant       = require('imagemin-pngquant'),
  spritesmith    = require('gulp.spritesmith'),
  autoprefixer   = require('gulp-autoprefixer'),
  plumber        = require('gulp-plumber'),
  gutil          = require('gulp-util'),
  del            = require('del'),
  runSequence    = require('run-sequence'),
  gulpIf         = require('gulp-if'),
  postcss        = require('gulp-postcss'),
  flexbugs       = require('postcss-flexbugs-fixes'),
  consolidate    = require('gulp-consolidate'),
  yaml           = require('require-yaml');

// Default task
gulp.task('default', function (callback) {
  runSequence(['sass', 'scripts', 'img'], 'watch',
    callback
  )
})

var postCssProcessors = [
  flexbugs()
]

gulp.task('sass', function () {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
    .pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer(['last 10 versions', '>3%']))
    .pipe( postcss(postCssProcessors) )
    .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/jquery.selectric.min.js',
    'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/masked.min.js',
    'src/libs/jquery.validate.min.js',
		'src/libs/scrollmonitor.js'
	])
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('src/js'))
});


gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('sprite', function () {
	var spriteData =
		gulp.src('./src/img/sprites/*.*')
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css',
			cssFormat: 'css',
			algorithm: 'binary-tree',
			padding: 3
		}));

	spriteData.img.pipe(gulp.dest('./src/img/'));
	spriteData.css.pipe(gulp.dest('./src/css/'));
});

gulp.task('img', function () {
	return gulp.src('src/img/**/*')
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{
				removeVeiwBox: false
		}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function () {
	return del.sync('dist/**');
});

//
// gulp.task('list-pages', function() {
//  delete require.cache[require.resolve('./src/list-pages/index.yaml')]
//  var pages = require('./src/list-pages/index.yaml');
//  return gulp
//    .src('src/list-pages/index.html')
//    .pipe(consolidate('lodash', {
//      pages: pages
//    }))
//    .pipe(gulp.dest('src'));
// });


gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function () {
	gulp.watch('src/scss/**/*', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/list-pages/**/*', ['list-pages']);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function () {

	var buildCss = gulp.src('src/css/style.css')
		.pipe(csso({
			sourceMap: false
		}))
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
    // .pipe(gulpIf(['*.js'], uglifyjs()))
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));

});
