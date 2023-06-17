# AppProject

```js
// in case CLI it is not install
npm i -g @angular/cli

ng new AppProject  --routing --style=scss

ng version

cd AppProject/src/app

ng serve --port 4200

ng g c dynamic-form --inline-style
// now add <app-child></app-child> into app.component.html 

// open code inside project
code .
```

##  setting noPropertyAccessFromIndexSignature 

Setting it to `true`, TypeScript will enforce that you cannot access properties using the index signature on objects. This will help catch potential errors and improve type safety.

```js
{
  "compilerOptions": {
    "noPropertyAccessFromIndexSignature": true
  }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
