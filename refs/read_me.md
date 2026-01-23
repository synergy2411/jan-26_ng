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

let friends = ["monica", "ross", "joe"]

friends.push("rachel"); // Impure change

friends = ["monica", "ross", "joey", "rachel"] // Pure change
