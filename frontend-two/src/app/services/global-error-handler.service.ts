import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}
  handleError(error: Error): void {
    console.log('Global Error Handler - ', error);
  }
}
