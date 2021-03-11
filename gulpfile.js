var gulp = require("gulp"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	iconfont = require('gulp-iconfont'),
	browserSync = require("browser-sync"),
	iconfontCss = require('gulp-iconfont-css');

gulp.task("sass", function() {
	return gulp.src("scss/**/*.scss")
	.pipe(scss())
	.pipe(autoprefixer(
		["last 30 version"]
	))
	.pipe(gulp.dest("css"))
})

gulp.task("reload", function(done) {
	browserSync.create()
	browserSync.init({
		server: "./"
	})
	browserSync.reload();
	done()
})

gulp.task('iconfont', function(){
	var runTimestamp = Math.round(Date.now()/1000);

	return gulp.src(['./images/icons/*.svg'])
		.pipe(iconfontCss({
			fontName: 'iconfont',
			path: './scss/global/_icons_template.scss',
			targetPath: '../scss/global/_icons.scss',
			fontPath: '../fonts/',
			firstGlyph: 0xf120 
		})).pipe(iconfont({
			fontName: 'iconfont',
			formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
			normalize: true,
			prependUnicode: true,
			fontHeight: 1001,
			timestamp: runTimestamp
		})).pipe(gulp.dest('./fonts/'));
});

gulp.task("watch", function() {
	gulp.watch("scss/**/*.scss", gulp.series("sass", "reload"))
	gulp.watch("./**/*.html", gulp.series("reload"))
	gulp.watch('./images/icons/*.svg', gulp.series('iconfont'))
})