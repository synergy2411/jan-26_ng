import { Component } from '@angular/core';
import { interval, Observable, from, map, filter, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent {
  interval$ = interval(1000);

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1000);
    setTimeout(() => observer.next('Second Package'), 800);
    setTimeout(() => observer.next('Third Package'), 3000);
    setTimeout(() => observer.next('Fourth Package'), 5000);
  });

  from$ = from(['Monica', 'Joey', 'Ross', 'Rachel', 'Chandler']);

  onIntervalSubscribe() {
    this.interval$
      .pipe(
        filter((value) => value % 2 == 0),
        map((value) => value * 2),
        take(3),
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.error(err),
        complete: () => console.log('COMPLETED'),
      });
  }

  onSubscribeCustomObs() {
    this.obs$.subscribe((pkg) => {
      console.log(pkg);
    });
  }

  onSubscribeFrom() {
    this.from$
      .pipe(
        filter((value) => value.includes('R')),
        map((value) => 'My Fast friend - ' + value),
      )
      .subscribe(console.log);
  }
}
