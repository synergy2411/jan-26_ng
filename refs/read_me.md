# JavaScript

- Scripting Language
- Client side (Browser) as well as Server side (Node Runtime Environment)
- Pagination
- Dynamic Behaviour
- Object oriented
- Asynchronous Programming
  > Browser : Web Worker
  > Node Runtime : libuv library (pool of C++ Threads)
- Single Thread
- Non Blocking

## MEAN Stack : Mongo Express Angular Node

## MERN Stack : Mongo Express React Node

## Asynchronous Tasks -

- Timer API (setTimeout, setInterval)
- Obtaining the socket
- Read / Write on disk
- I/O
- XHR Call (Remote Server Calls)
- Complex Operation [1500]\*[1500]

### Handling Async Tasks

- Callbacks: functions supplied as arguments to other functions
- Promises: .then().catch() / Async...await
- Observables: RxJS Library

## JavaScript Engine

- Creational Phase : memory is allocated; undefined
- Executional Phase: executes code; performs assignments, returns value;

## JavaScript DataTypes

- Primitive: String, number, boolean, symbol
- Reference: Date, array, object, function

## Lexical Scope

## ES6 Features

- Arrow Functions
- Rest/Spread (...)
- Block Scoping - let, const
- Destructuring - Object, Array, Nested Destructuring

## Promise Static Methods

> all
> allSettled
> race
> any
> resolve
> reject

# TypeScript Project

- npm create vite@latest

# Angular - Building Blocks

- Component : @Component({})
- Directive : @Directive({})
- Pipe : @Pipe({})
- Service : @Injectable({})
- Module : @NgModule({})

- Class : @Component({}), @Directive({}) etc
- Properties : @Input(), @HostBinding(), @Output()
- Methods : @HostListener()
- Parameters : @Skip(), @Optional(), @Host()

## JavaScript Libraries / Frameworks

- AngularJS : v1.x, Library
- Angular : Router, Services, FormsModule, HttpClient, Directives, Pipes, Components, Templates, Animations, Shadow DOM etc

- React : 35kb Lib, Virtual DOM, Components, quickly and efficiently render the UI, Diffing Algo, Reconciliation Process.

  > SPA: react-router
  > State Management: Redux
  > Form Validation: formik, react-form-hook etc
  > AJAX Calls: jQuery, Axios, Fetch API

- React Native : Mobile Apps, Geolocation, Camera, File System etc
- Vue\* : Progressive Framework. Emerging. "Evan You"
- Next : Server-Side Framework for React
- JQuery : DOM Manipulation, Validations, AJAX, Animations etc
- Backbone : Lib. Client side MVC Pattern
- Knockout : MVVM Pattern, 2 way data binding
- Polymer : Rich Web Components
- Bootstrap : Pre-built components, CSS Classes, RWD Apps
- Stencil : VDOM, Component, Web Apps
- Gatsby
- Nest

- Express, koa, Hapi, Sails, KrakenJS : Web App Framework, http Server, Socket Server, upload/download server etc
- Node: A Platform

## Angular CLI Tool (ng)

- latest v21.x (Standalone Component)
- v17.x (Standalone / Module based Apps)

- npm install @angular/cli@17 -g
- ng version

- ng new frontend
- ng new frontend-two --no-standalone --no-routing

- cd frontend
- npm start

- ng generate component path/to/component
- ng g c components/users
- ng g d directives/highlight
- ng g p pipes/

## Bootstrap Library

> npm install bootstrap

## Angular Component

- Reusable
- Create UI
- Data Binding
  > Property Binding
  > Event Binding
  > Two way data binding
- Nested Component Communication
  > Parent to child (PB + @Input())
  > Child to parent (EventEmitter + @Output() + EB)
- Life Cycle

## Angular Directives

- Component Directive
- Attributes Directive (ngClass, ngStyle)
- Structural Directive

## Angular Pipes

### Built in Pipes

- uppercase
- lowercase
- json
- percent
- number
- currency
- date
- async

### Custom Pipes

- Pure (by default)
  let friends = ["monica", "ross", "joe"]
  friends = ["monica", "ross", "joey", "rachel"] // Pure change

- Impure : less efficient
  friends.push("rachel"); // Impure change

## Angular Form

- Template Form
- Model Form / Reactive Form

### Form and Form Elements - Classes and States

- touched/untouched
- pristine/dirty
- valid/invalid

### Model Form / Reactive Form

- FormControl
- FormGroup
- FormBuilder
- FormArray

### FormArray

- Group of FormControl
- Group of FormGroups

## Angular Services

- Data consistency
- Singleton effect
- DI Concepts
- Single Responsibility Principle

### Dependency Injection Hierarchy

### Multiple Service Registration

### Dependency Injector Modifiers

- @SkipSelf() : Don't search the token inside the same component
- @Self() : Only search injector token inside the same/self component
- @Host() : Search injector token in Parent/Host component
- @Optional() : Ignors NullInjector Error, making the Dependency as optional.

### Counter Service

- CompA
- CompB

## RxJS Observables vs Promise

- Observable

  > Series of events
  > both sync as well async
  > lazy, by default
  > event based
  > support various operators
  > keeps an eye on data source
  > can be cancelled

- Promises
  > One shot (fulfilled / rejected)
  > can only be async
  > eagerly executed
  > No Operator support
  > Can't be cancelled
  > http polling

### Observable : stream of events

### Observer: next(), error(), complete()

### Subjects

- are both observer and observable
- can have multiple subscribers
- next(), error(), complete()
- pipe(), subscribe()

#### Subject Types

- BehaviourSubject : last emitted value becomes seed value for the subsequent sunscribers
- ReplaySubject : number of last emission captured in subsequent subscriptions
- AsyncSubject : consume last emitted value upon completion

## HttpClient -

- HttpClientModule
- HttpClient Service
- Interceptors

## JSON Server

- npm install json-server@0.17.4 -g
- create json file
- run json-server
  > json-server --watch db.json

## Single Page Apps

- One Page; does not reload / refresh
- Dynamic Content
- Loading dynamic content conditionally
- Shareable / Bookmarkable URL
- Deeply linked content
- RBAC - Role Based Access Control
- Modular approach
- Lazy loading
- State Management
- Complete App is sent to browser in one go
- Better UX
- high bootstrap / loading time
- huge build size

### Routing Terminologies

- <base href="/"> : should represent domain
- Routes: creates routing configuration; maps path with components
- RouterModule.forRoot(RouteConfig) : Supplied route config with module
- routerLink attribute with <a> element: prevent page reloading
- <router-outlet> : to load component template
- ActivatedRoute Service : access current path in the url
- Router Service : Programmatically navigate the user

- Protected Routes
- Modules
- Testing
- Tips and Conclusion

## Angular Testing

- TestBed
- Fixture
  > ng test --code-coverage
