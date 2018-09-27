import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { fromEvent, merge, range, Subscription } from 'rxjs';
import { bufferCount, map, tap } from 'rxjs/operators';


// buffer : plusieurs clic avant d'envoyer toutes les valeurs

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrls: ['./select-number.component.css']
})
export class SelectNumberComponent implements OnInit, AfterViewInit {

  maxRange = 10;

  numberCount = 5;

  numbersList = [];

  selectedNumbersList: number[];

  @ViewChildren('button') buttonsList: QueryList<ElementRef>;

  private subscription: Subscription;

  constructor() {
  }

  private getButtonsObservable() {
    return merge(
      ...this.buttonsList
        .toArray()
        .map(({nativeElement}) => {
          return fromEvent<MouseEvent>(nativeElement, 'click');
        })
    ).pipe(
      map(({target: {value}}: any) => {
        return parseInt(value, 10);
      })
    );
  }

  private buildRange() {
    this.numbersList = [];
    range(1, this.maxRange)
      .subscribe(value => {
          this.numbersList.push(value);
        }
      );
  }

  ngOnInit() {
    this.buildRange();
  }

  ngAfterViewInit(): void {

    this.subscription = this.getButtonsObservable()
      .pipe(
        tap(value => {
          if (this.selectedNumbersList) {
            console.clear();
            this.selectedNumbersList = null;
          }
          console.log('clicked value ', value);
        }),
        bufferCount(this.numberCount)
      )
      .subscribe(value => {
        console.log(value);
        this.selectedNumbersList = value;
      });
  }


}
