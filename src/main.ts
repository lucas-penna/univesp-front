import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const storage = persistState();

const providers = [{ provide: 'persistStorage', useValue: storage }];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
