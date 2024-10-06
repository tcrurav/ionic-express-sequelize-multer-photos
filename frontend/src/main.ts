import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
<<<<<<< HEAD
=======

if (environment.production) {
  enableProdMode();
}
>>>>>>> b16320c089bd683636571db7c17ba62a0bc3863a

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
