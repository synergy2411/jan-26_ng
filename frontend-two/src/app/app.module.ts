import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { DirectivesComponent } from './components/demo/directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeComponent } from './components/demo/pipe/pipe.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserService } from './services/user.service';
import { CompAComponent } from './components/demo/comp-a/comp-a.component';
import { CompBComponent } from './components/demo/comp-b/comp-b.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    LifeCycleComponent,
    DirectivesComponent,
    HighlightDirective,
    BetterHighlightDirective,
    PipeComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    CompAComponent,
    CompBComponent,
  ],
  imports: [
    // Module : Built-in / Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
