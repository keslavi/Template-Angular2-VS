import * as gulp from 'gulp';
import { join } from 'path';

import Config from '../../config';

/*
	build task to copy image files
*/
export = () => {
	return gulp.src([
		join(Config.APP_SRC, '**/*.jps'),
		join(Config.APP_SRC, '**/*.png'),
		join(Config.APP_SRC, '**/*.gif')
	])
	.pipe(gulp.dest(Config.APP_DEST));
}
