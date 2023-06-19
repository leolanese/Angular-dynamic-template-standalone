import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

// The AppComponent class is a standalone component. This means that it does not belong to any module.
// The @NgModule.bootstrap array can only contain components that belong to a module.
// The bootstrapApplication function can be used to bootstrap any component, including standalone components.