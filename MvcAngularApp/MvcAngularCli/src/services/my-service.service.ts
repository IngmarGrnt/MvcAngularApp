// my-service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Zorgt ervoor dat de service in de hele applicatie beschikbaar is
})
export class MyService {
  constructor() { }

  getData() {
    return 'Hello from MyService!';
  }
}
