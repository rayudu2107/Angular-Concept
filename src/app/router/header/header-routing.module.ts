import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { UsersComponent } from '../users/users.component';
import { UsercardComponent } from '../usercard/usercard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ProductsComponent } from '../products/products.component';

  const routes: Routes = [
    {
      path: '', component: HeaderComponent,  
      children: [
       {
          path: 'about', component: AboutComponent  // Child route for 'About'
        },
        {
          path: 'about', component: AboutComponent  // Child route for 'About'
        },
        {
          path: 'contact', component: ContactComponent  // Child route for 'Contact'
        },
        {
        path:'users',component:UsersComponent
        },
        {
        path:'usercard/:id',component:UsercardComponent
        },
        {
    path:'products',component:ProductsComponent
  },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
