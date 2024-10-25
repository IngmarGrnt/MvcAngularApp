import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css'], // Ensure this path is correct
})
export class SimpleComponentComponent {
  @Input() message: string = '';



}

