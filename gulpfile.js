let	gulp = require('gulp'),
browserSync = require('browser-sync'),
pugI18n = require('gulp-i18n-pug'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
notify = require("gulp-notify"),
babel = require('gulp-babel'),
uglify = require('gulp-uglify');

gulp.task('browser-sync', () => {
	browserSync({
		server: {baseDir: 'app'},
		notify: false
	});
});

gulp.task('pugI18n', () => {
	var options = {
		i18n: {
			dest: 'app',
			locales: 'src/pug/locales/*.*'
		},
		pretty: true
	};
	return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
		.pipe(pugI18n(options))
		.pipe(gulp.dest(options.i18n.dest));
});

gulp.task('sass', () => {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass().on("error", notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('app/assets/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('babel', () =>
    gulp.src('src/js/common.js')
        .pipe(babel({
            presets: ['@babel/env']
		}))
		.pipe(uglify())
        .pipe(gulp.dest('app/assets/js'))
);

gulp.task('watch', ['pugI18n', 'sass', 'babel', 'browser-sync'], () => {
	gulp.watch('src/pug/**/*.pug', ['pugI18n']);
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/js/**/*.js', ['babel']);
	gulp.watch('app/ua/*.html', browserSync.reload);
	gulp.watch('app/ru/*.html', browserSync.reload);
	gulp.watch('app/en/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);