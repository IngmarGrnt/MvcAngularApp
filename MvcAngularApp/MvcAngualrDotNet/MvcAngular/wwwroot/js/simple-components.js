import { bootstrapApplication } from '@angular/platform-browser';
import { SimpleComponentComponent } from '\.\ClientApp\\MvcAngularAppCli\\src\\app\\components\\simple-component\\simple-component.component.ts'
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('simple-component');
    if (element) {
        console.log(element);
        bootstrapApplication(SimpleComponentComponent)
            .then(() => console.log('SimpleComponentComponent is bootstrapped!'))
            .catch(err => console.error('Bootstrap error:', err));
    }
});