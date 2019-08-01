import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HommeComponent } from './homme/homme.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component:HommeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'blog',
    component:BlogComponent
  },
 {
  path: 'contact',
  component:ContactComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
