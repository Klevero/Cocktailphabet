//////////////
//	Required
//////////////

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	/*autoprefixer = require('gulp-autoprefixer'),*/
	rename = require('gulp-rename');



//////////////
//	Scripts Task
//////////////

gulp.task('scripts', function(){
	
	// js
	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('js'));

});

//css
gulp.task('css', function(){
	
	gulp.src(['scss/**/*.css', '!scss/**/*.min.css'])
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('css'))
	.pipe(reload({stream:true}));

});

//html
gulp.task('html', function(){
	
	gulp.src('**/*.html')
	.pipe(reload({stream:true}));

});

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./"
		}
	});
});

//////////////
//	Watch Task
//////////////

gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('scss/**/*.css', ['css']);
	gulp.watch('**/*.html', ['html']);
});


//////////////
//	Scripts Task
//////////////

gulp.task('default', ['scripts', 'html', 'css', 'watch', 'browser-sync']);