import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';  

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(MyComponentComponent, appConfig)
  .catch((err) => console.error(err));