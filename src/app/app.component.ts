import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input #box (keyup)="0">
              <p>{{box.value.split('').reverse().join('')}}</p>
            `
})
export class AppComponent { } 
