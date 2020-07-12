import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  messages:string[]=[];
  constructor() { }

  log(message:string)
  {
    this.messages.push(message)
    console.log(message);
  }
}
