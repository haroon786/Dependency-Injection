import { Injectable } from '@angular/core';

export class TestService3 {

      employeeName= '🐞';
     constructor() { }

}

export function xyzFactory() {
  return new TestService3();
}

@Injectable({
  providedIn: 'root',
  useFactory:xyzFactory
})
export class TestService {

  employeeName= '🐝';
  constructor() { }

}
