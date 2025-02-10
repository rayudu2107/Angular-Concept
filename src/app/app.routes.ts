import { HeaderRoutingModule } from './../../../ngrx/src/app/components/header/header-routing.module';
import { Routes } from '@angular/router';
import { HeaderComponent } from './router/header/header.component';
import { AboutComponent } from './router/about/about.component';
import { HomeComponent } from '../../../ngrx/src/app/components/home/home.component';

export const routes: Routes = [
//  {
      {
        path: 'contact', component: HomeComponent  // Child route for 'Contact'
      },
  
      {
    path: '',
    loadChildren: () => import('./router/header/header-routing.module').then(m => m.HeaderRoutingModule),
  },
];
