import { Injectable } from '@angular/core';

export class TestService3 {
  employeeName=  '🦋' ;
  constructor()
  {
    console.log(`in testservice  conostructor`)
  }
      getFlower()
        {
          console.log( `testservice 3`)
        }
}

export function xyzFactory() {
  return new TestService3();
}

@Injectable({
  providedIn: 'root',
  useFactory:xyzFactory
})
export class TestService {
  employeeName= '🐞';
  constructor() { }
  getFlower()
  {
    console.log(`test service`)
  }
}
