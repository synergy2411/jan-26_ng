import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { ObservableComponent } from './components/demo/observable/observable.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { LoggerService } from './services/interceptors/logger.service';
import { ResponseService } from './services/interceptors/response.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './components/ui/main-navigation/main-navigation.component';

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
    ObservableComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    ExpenseItemComponent,
    NotFoundComponent,
    CoursesComponent,
    MainNavigationComponent,
  ],
  imports: [
    // Module : Built-in / Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseService,
      multi: true,
    },
  ], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
