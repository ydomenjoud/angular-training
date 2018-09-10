import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-b06-lifecycle',
  templateUrl: './b06-lifecycle.component.html',
  styleUrls: ['./b06-lifecycle.component.css']
})
export class B06LifecycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  count = 0;

  private messagesList: { content: string, date: Date }[] = [];

  intervalReference;

  constructor() {
  }

  get messages() {
    return this.messagesList;
  }

  increment() {
    this.count++;
  }

  toggleInterval() {
    if (this.intervalReference) {
      this.clearInterval();
    } else {
      this.startInterval();
    }
  }

  private log(content: string) {
    const date = new Date();
    this.messagesList.unshift({content, date});
  }

  private startInterval() {
    this.intervalReference = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  private clearInterval() {
    clearInterval(this.intervalReference);
    this.intervalReference = null;
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

}
