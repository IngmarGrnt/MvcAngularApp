// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// import { SimpleComponentComponent } from './components/simple-component/simple-component.component';

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

//   bootstrapApplication(SimpleComponentComponent)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { SimpleComponentComponent } from './components/simple-component/simple-component.component';

console.log('Starting bootstrap...');


console.log(bootstrapApplication(SimpleComponentComponent));
bootstrapApplication(SimpleComponentComponent)
  .then(() => console.log('SimpleComponentComponent is bootstrapped!'))
  .catch(err => {
    console.error('Bootstrap error:', err);
  });

// document.addEventListener('DOMContentLoaded', function () {
//   if (document.getElementById('simple-component')) {
//     bootstrapApplication(SimpleComponentComponent)
//     .then(() => console.log('SimpleComponentComponent has been bootstrapped!'))
//     .catch(err => console.error(err));
//   }
// });