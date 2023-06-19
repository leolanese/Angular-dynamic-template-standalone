import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

// we remove the platformBrowserDynamic() and import the bootstrapApplication() 
// instead and inject the App Component inside the function.
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// Environment injectors
bootstrapApplication(AppComponent, {
  providers: [],
})
 .catch((err) => console.error(err));
