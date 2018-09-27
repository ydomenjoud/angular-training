import { Component, OnDestroy, OnInit } from '@angular/core';
import { range, Subject, Subscription } from 'rxjs';
import { bufferTime, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-select-number-timeout',
  templateUrl: './select-number-timeout.component.html',
  styleUrls: ['./select-number-timeout.component.css']
})
export class SelectNumberTimeoutComponent implements OnInit, OnDestroy {

  maxRange = 10;

  timeout = 5;

  numbersList = [];

  selectedNumbersList: number[];

  running = false;

  private subject$ = new Subject<number>();

  private subscription: Subscription;

  constructor() {
  }

  end() {
    this.running = false;
    this.removeSubscription();
  }

  start() {

    this.selectedNumbersList = null;
    this.running = true;

    this.subscription = this.subject$
      .pipe(
        tap(value => console.log(value)),
        bufferTime(this.timeout * 1000),
        take(1)
      )
      .subscribe(
        value => {
          this.selectedNumbersList = value;
          this.end();
        }
      );
  }

  pickNumber(number) {
    this.subject$.next(number);
  }

  private buildRange() {
    this.numbersList = [];
    range(1, this.maxRange)
      .subscribe(value => {
          this.numbersList.push(value);
        }
      );
  }

  private removeSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.buildRange();
  }

  ngOnDestroy(): void {
    this.removeSubscription();
  }

}
