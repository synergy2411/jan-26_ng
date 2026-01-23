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

  filteredStatus = '';

  todoCollection = [
    { label: 'grocery', status: 'completed' },
    { label: 'shopping', status: 'pending' },
    { label: 'planting', status: 'completed' },
    { label: 'insurance', status: 'pending' },
  ];

  onAddTodo() {
    // Impure Change
    this.todoCollection.push({ label: 'New Todo', status: 'pending' });

    // Pure Change
    // this.todoCollection = [
    //   { label: 'Fresh Todo', status: 'pending' },
    //   ...this.todoCollection,
    // ];
  }
}
