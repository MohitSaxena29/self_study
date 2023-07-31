import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from '../registration/registration.module';
import { CustompipePipe } from './custompipe.pipe';
import { LoginComponent } from './registration/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BindingComponent } from './binding/binding/binding.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { InputComponent } from './input/input/input.component';
import { FormsModule } from '@angular/forms';
import { LogicalTrackbyComponent } from './logical-trackby/logical-trackby/logical-trackby.component';
import { RoutingComponent } from './routing/routing/routing.component';
@NgModule({
  declarations: [AppComponent, CustompipePipe, LoginComponent, SignupComponent, HomeComponent, ErrorpageComponent, BindingComponent, DirectiveComponent, InputComponent, LogicalTrackbyComponent, RoutingComponent],
  imports: [BrowserModule, AppRoutingModule, RegistrationModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
