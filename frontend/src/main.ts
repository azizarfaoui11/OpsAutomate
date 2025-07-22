import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { NgModel } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app/app.module'; 
import { provideAnimations } from '@angular/platform-browser/animations';

 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




/*platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [provideAnimations()],
})
  .catch((err) => console.log(err));
  */
  //import "@angular/compiler";
 // import { platformBrowser } from '@angular/platform-browser';

 // import { enableProdMode } from '@angular/core';

//import { AppModule } from './app/app.module';
// Ajustez le chemin si nécessaire
//import { environment } from './environments/environment';

/*if (environment.production) {
  enableProdMode();
}*/

/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
