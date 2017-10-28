import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [

  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'module1', loadChildren: 'app/module1/one.module#ModuleOne' },
  { path: 'module2', loadChildren: 'app/module2/two.module#ModuleTwo' },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
