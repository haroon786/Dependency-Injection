import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
    return  this.employeeName='⚾️';
  }


}
