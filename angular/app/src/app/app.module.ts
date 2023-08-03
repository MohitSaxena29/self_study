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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogicalTrackbyComponent } from './logical-trackby/logical-trackby/logical-trackby.component';
import { RoutingComponent } from './routing/routing/routing.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './bootstrap/bootstrap/bootstrap.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
// import {CustomerModule} from './customer/customer.module';
// import {OrderModule} from './order/order.module';
@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ErrorpageComponent,
    BindingComponent,
    DirectiveComponent,
    InputComponent,
    LogicalTrackbyComponent,
    RoutingComponent,
    ProfileComponent,
    BootstrapComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
