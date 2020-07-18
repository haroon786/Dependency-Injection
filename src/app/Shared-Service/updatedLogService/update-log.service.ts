import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateLogService {

  private static count=0;
  constructor() {
    UpdateLogService.count=UpdateLogService.count+1;
    console.log(`updated log service ${UpdateLogService.count}`);
    }
    sayHello(message:string)
    {
      return   `Hello ${message} from updated service`;
    }


}
