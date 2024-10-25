import { ApplicationConfig, provideZoneChangeDetection, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     { provide: NgZone, useFactory: () => new NgZone({ enableLongStackTrace: false }) }
//   ]
// };