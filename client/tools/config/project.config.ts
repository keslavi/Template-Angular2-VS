import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

	PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
	DEV_DEST_IMAGES:string =this.DIST_DIR + "/dev/assets/img";
	FONTS_DEST='${this.APP_Dest/fonts}';
	FONTS_SRC= [
		'node_modules/bootstrap/dist/fonts/**'
	]


	constructor() {
		super();

		// this.APP_TITLE = 'Put name of your app here';

		/* Enable typeless compiler runs (faster) between typed compiler runs. */
		// this.TYPED_COMPILE_INTERVAL = 5;

		// Add `NPM` third-party libraries to be injected/bundled.
		this.NPM_DEPENDENCIES = [
			...this.NPM_DEPENDENCIES,
			{ src: 'jquery/dist/jquery.min.js', inject: 'libs' },
			{ src: 'lodash/lodash.min.js', inject: 'libs' },
			{ src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
			{ src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
			{ src: 'bootstrap/dist/css/bootstrap-theme.min.css', inject: true }, // inject into css section
			{ src: 'bootstrap/dist/css/bootstrap-theme.min.css.map', inject: true }, // inject into css section
		];

		// Add `local` third-party libraries to be injected/bundled.
		this.APP_ASSETS = [
			...this.APP_ASSETS,
			// {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
			// {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
		];

		/* Add to or override NPM module configurations: */
		// this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
	}

}
