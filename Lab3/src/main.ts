
// import { HttpClientModule } from '@angular/common/http';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { importProvidersFrom } from '@angular/core';

 

// import { AppComponent } from './app/app.component'; 

// bootstrapApplication(AppComponent, {
//   providers: [
   
//   ]
// }).catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routes
    provideHttpClient(),      // Provide HttpClient
  ],
}).catch((err) => console.error(err));


