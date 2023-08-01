import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProfileComponent } from './profile/profile.component';

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
    path:'**',
    component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
