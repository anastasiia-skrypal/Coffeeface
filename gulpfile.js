var gulp = require("gulp"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = require("browser-sync");

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

gulp.task("watch", function() {
	gulp.watch("scss/**/*.scss", gulp.series("sass", "reload"))
})