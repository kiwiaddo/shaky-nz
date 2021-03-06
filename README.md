# Shaky NZ

This app is deployed here: https://shaky-nz.firebaseapp.com/

A app using Angular 2, Angular 2 Material, Observables and the [GeoNet API](https://api.geonet.org.nz/). Feel free to have a play, fork and contribute!

It allows you to view recent earthquakes in NZ, filter by their intensity and (if you have a google account) save them to your profile.

## Features
- Angular 2 Material
- GeoNet NZ API
- Firebase Database
- Firebase Auth

## Learnings
- [Dependancy Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#angular-dependency-injection)
- [Route Guards](https://angular.io/docs/ts/latest/guide/router.html#!#guards) 
- [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- [CSS3 Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Angular Template syntax](https://medium.com/front-end-hacking/angular-2-a-quick-intro-about-template-syntax-121f9b160a64#.pmixw0h2v) 
- [Dialogs in Material 2]
(https://medium.com/@tarik.nzl/making-use-of-dialogs-in-material-2-mddialog-7533d27df41)

## Todo
- Typescript type maps for geonet
- Allow user to plot intensity of quake
- Shake canvas/document based on intensity https://jsfiddle.net/kiwiaddo/6pzv1w28/
- Capture user input into an array https://jsfiddle.net/kiwiaddo/j3shLoyh/2/
- Restructure data by writing to events list and user-events list https://firebase.google.com/docs/database/web/read-and-write
- Look at Reactive Forms (perhaps in a different project) https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#intro

## Notes

This project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
