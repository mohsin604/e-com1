import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './main-component/home/home.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
