import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsDemoService {

  constructor() { }

  myString = signal('hello world');
}
