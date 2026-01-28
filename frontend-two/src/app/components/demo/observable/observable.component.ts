import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  from,
  map,
  filter,
  take,
  tap,
  catchError,
  of,
  throwError,
  Subscription,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent {
  interval$ = interval(1000);

  unsub$!: Subscription;

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1000);
    setTimeout(() => observer.next('Second Package'), 3000);
    setTimeout(() => observer.next('Third Package'), 5000);
    setTimeout(
      () => observer.error(new Error('Somethign went wrong here...')),
      7000,
    );
    setTimeout(() => observer.next('Fourth Package'), 10000);
  });

  from$ = from(['Monica', 'Joey', 'Ross', 'Rachel', 'Chandler']);

  onIntervalSubscribe() {
    this.interval$
      .pipe(
        tap((value) => console.log('[TAP] ', value)),
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
    // throw new Error('New Error Thrown');
    this.unsub$ = this.obs$
      .pipe(
        catchError((error: Error) => {
          //  Put error in error log
          console.log('Catching the error in handler', error.message);
          throw of(error);
        }),
      )
      .subscribe(
        (pkg) => console.log(pkg),
        (error) => {
          throw of(error);
        },
        () => console.log('COMPLETED'),
      );
  }

  onUnsubscribeCustom() {
    this.unsub$.unsubscribe();
  }
  onSubscribeFrom() {
    this.from$
      .pipe(
        filter((value) => value.includes('R')),
        map((value) => 'My Fast friend - ' + value),
      )
      .subscribe(console.log);
  }

  onSubject() {
    // const subject = new Subject();
    // const subject = new BehaviorSubject(100);
    // const subject = new ReplaySubject(1);
    const subject = new AsyncSubject();

    subject.subscribe((data) => console.log('Subs 1 - ', data));

    subject.next(99);
    subject.next(101);
    subject.next(102);

    subject.subscribe((data) => console.log('Subs 2 - ', data));

    subject.next(103);

    subject.complete();
  }
}
