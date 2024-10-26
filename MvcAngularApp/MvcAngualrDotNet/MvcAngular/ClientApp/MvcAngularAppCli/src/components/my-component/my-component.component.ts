import { Component } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrls:  ['./my-component.component.css']
})
export class MyComponentComponent {
  message: string;

  constructor(private myService: MyserviceService) {
    this.message = this.myService.getData();
  }
}
