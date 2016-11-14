import Config from '../../config';
import { clean } from '../../utils';

//clean all image files within the /dist/folder
export=clean(Config.DEV_DEST_IMAGES);
