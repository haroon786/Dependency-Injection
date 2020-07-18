import { Injectable, Inject } from '@angular/core';
import {UpdateLogService} from '../Shared-Service/updatedLogService/update-log.service';
import {apiConfigValue} from '../apiConfig.value';
console.log(`included in bundle `)

@Injectable({
  providedIn: 'any'
})
export class LoggingService {
  messages:string[]=[];
  public static count=0;
  constructor(@Inject(apiConfigValue) private configvalue) {
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
  getConfigValues()
  {
     return this.configvalue;
  }

}
