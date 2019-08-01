import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HommeComponent } from './homme/homme.component';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './link/header/header.component';
import { BannerComponent } from './link/banner/banner.component';


@NgModule({
  declarations: [HommeComponent, AboutComponent, BlogComponent, ContactComponent, HeaderComponent, BannerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ],
  exports: [
    HeaderComponent,
    HommeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    BannerComponent
  ]
})
export class MainModule {
  
 }
