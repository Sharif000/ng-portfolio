import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HommeComponent } from './modules/main/homme/homme.component';
import { AboutComponent } from './modules/main/about/about.component';
import { BlogComponent } from './modules/main/blog/blog.component';
import { ContactComponent } from './modules/main/contact/contact.component';


const routes: Routes = [
 {
   path: '',
   component: HommeComponent,
   pathMatch: 'full'

 },
 {
   path: 'about',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
