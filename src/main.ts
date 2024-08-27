import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app/app.routes';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideAnimations()
  ]
};
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



