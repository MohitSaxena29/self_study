import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProfileComponent } from './profile/profile.component';
// for perLoading
// import { PreloadingStrategy } from '@angular/router';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path: 'profile' ,component: ProfileComponent 
  },
  {
    path: 'profile/:name',component:ProfileComponent
  },
  {
    path: 'profile/:name/:id',component:ProfileComponent
  },
  {
    path: 'customer',loadChildren:()=>import('./customer/customer.module').then(mod=>mod.CustomerModule)
  },
  {
    path: 'order',loadChildren:()=>import('./order/order.module').then(mod=>mod.OrderModule)
  },
  {
    path:'**',
    component:ErrorpageComponent
  }
];

@NgModule({
  // for preloading
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
