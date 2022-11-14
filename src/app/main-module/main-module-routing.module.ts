import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { HomeComponent } from './main-component/home/home.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent, children:[
  {path:'',component:HomeComponent},
  {path:'',component:AboutUsComponent},
  {path:'',component:ContactUsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
