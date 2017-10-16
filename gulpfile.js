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
  runSequence(['sass', 'scripts', 'img', 'fonts', 'html'], 'watch',
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
		.pipe(sass())
		.pipe(autoprefixer(['last 10 versions', '>3%']))
    .pipe( postcss(postCssProcessors) )
    .pipe(csso({
			sourceMap: false
		}))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/jquery.selectric.min.js',
    'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/masked.min.js',
    'src/libs/jquery.validate.min.js',
		'src/libs/wow.min.js',
    'src/js/*.js'
	])
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(concat('app.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
})

gulp.task('html', function () {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
})

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

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'dist'
		},
    files: [
      'dist/*.html',
      'dist/*.css',
      'dist/*.js',
      'dist/img/**/*'
    ],
	});
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


gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'img', 'fonts', 'html'], function () {
	gulp.watch('src/scss/**/*', ['sass']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/js/*.js', ['scripts']);
  // gulp.watch('src/list-pages/**/*', ['list-pages']);
});
