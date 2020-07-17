import { Injectable } from '@angular/core';
import { TestService } from '../TestServie/test.service';

@Injectable({
  providedIn: 'root',
  useFactory:TestService
})
export class AnimalService {


  employeeName= '🥀';
  constructor() {
    console.log(this.employeeName);
    console.log(`in animal service constructor`)
  }

  getFlower()
  {
    console.log(this.employeeName);
    console.log(`get flower in animal service`)
    //return  this.employeeName='⚾️';
  }


}
