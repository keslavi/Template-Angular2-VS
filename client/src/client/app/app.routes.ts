import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { _TemplateRoutes } from './_template/index';
import { HomeRoutes } from './home/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ..._TemplateRoutes
];
