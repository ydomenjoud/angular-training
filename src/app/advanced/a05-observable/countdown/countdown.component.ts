import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { autoUnsubscribe } from 'src/app/tools/auto-unsubscribe.decorator';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() duration = 5;

  @Input() step = 40;

  @Input() bgColor = '#007bff';

  width = 0;

  @autoUnsubscribe()
  subscriptions: Subscription;

  constructor() {
  }

  calculWidth(value) {
    return (value  / this.step );
  }

  ngOnInit() {

    const intervalDuration = this.duration / this.step;

    this.subscriptions = interval(intervalDuration * 1000)
      .pipe(
        map(value => value + 1),
        take(this.step)
      )
      .subscribe(value => {
        this.width = this.calculWidth(value) * 100;
      });

  }

  ngOnDestroy(): void {
  }

}
