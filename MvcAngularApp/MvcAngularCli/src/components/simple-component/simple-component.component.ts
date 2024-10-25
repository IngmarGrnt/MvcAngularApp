import { Component, Input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MyService } from '../../services/my-service.service';


@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css'], // Ensure this path is correct
})
export class SimpleComponentComponent {
  // @Input() message: string = '';
  message: string;

  constructor(private myService: MyService) {
    this.message = this.myService.getData();
  }
}

// console.log('Starting bootstrap...');

// console.log(bootstrapApplication(SimpleComponentComponent));
// bootstrapApplication(SimpleComponentComponent)
//   .then(() => console.log('SimpleComponentComponent is bootstrapped!'))
//   .catch(err => {
//     console.error('Bootstrap error:', err);
//   });