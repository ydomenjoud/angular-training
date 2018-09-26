import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass']
})
export class CountdownComponent implements OnInit {

  @Input() duration = 5;

  @Input() step = 40;

  @Input() bgColor = '#007bff';

  width = 0;

  constructor() {
  }

  calculWidth(value) {
    return (value  / this.step );
  }

  ngOnInit() {

    const intervalDuration = this.duration / this.step;

    interval(intervalDuration * 1000)
      .pipe(
        map(value => value + 1),
        take(this.step)
      )
      .subscribe(value => {
        this.width = this.calculWidth(value) * 100;
      });

  }

}
