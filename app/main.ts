import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // get everything from Rx

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
