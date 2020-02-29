var gulp = require('gulp');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');
var gzip = require('gulp-gzip');


//JS minify
const js_minify = require('gulp-minify');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');


// img plugins
var imageop = require('gulp-image-optimization');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

const imagemin = require('gulp-imagemin');
 

gulp.task('images', async () =>
    {
    gulp.src(['src/images/**/*.png', 'src/images/**/*.jpg', 'src/images/**/*.png'])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('assets/images'));
    gulp.src(['src/images/**/*.ico'])
        .pipe(gulp.dest('assets/images'));
    }
);

gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: AUTOPREFIXER_BROWSERS}),
        cssnano()
    ];

    return gulp.src('src/css/**/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gzip())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('js', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(js_minify())
        .pipe(gulp.dest('assets/js/'))
});

gulp.task('slick', function () {
   return gulp.src(['src/css/slick/**/*']).pipe(gulp.dest('assets/css/slick/'))
});

gulp.task('build', gulp.series('js', gulp.series('css', gulp.series('slick', gulp.series('images', function (/* cb */) {
    return nodemonServerInit();
})))));

gulp.task('watch', function () {
    gulp.watch('src/css/**', ['css']);
});

gulp.task('zip', gulp.series('build', function() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
}));

gulp.task('default', gulp.series('build', function () {
    gulp.start('watch');
}));

/*
gulp.task('images', function(cb) {
    gulp.src(['src/** /*.png','src/** /*.jpg','src/** /*.gif','src/** /*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets/images')).on('end', cb).on('error', cb);
});*/
