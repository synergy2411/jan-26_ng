import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  theDate = new Date('Dec 21, 1972');
  promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 1500);
  });
  someText = 'HELLO WORLD';
}
