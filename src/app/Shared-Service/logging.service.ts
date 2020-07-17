import { Injectable } from '@angular/core';
console.log(`included in bundle `)

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  messages:string[]=[];
  public static count=0;
  constructor() {
        LoggingService.count=LoggingService.count+1;
        console.log(`here in loggin service ${LoggingService.count}`)
   }

  log(message:string)
  {
    this.messages.push(message)
    console.log(message);
  }

  sayHello(message:string)
  {
    return `Hello  ${message}`;
  }
}
