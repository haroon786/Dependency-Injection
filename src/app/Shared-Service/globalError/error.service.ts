import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorService implements ErrorHandler  {

  constructor() { }
  handleError(error: any): void {
      console.log(`i am for handling errors`)
  }

}
