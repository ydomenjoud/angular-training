import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { LearnxjsContainerDirective } from 'src/app/advanced/a05-observable/learnxjs-container.directive';

@Directive({
  selector: '[appLearnxjs]'
})
export class LearnxjsDirective implements OnInit {

  @Input() appLearnxjs;

  @HostBinding('href') href;
  @HostBinding('target') target = '_blank';

  readonly baseUrl = 'https://www.learnrxjs.io/operators/';

  constructor(private elementRef: ElementRef,
              private learnxjsContainerDirective: LearnxjsContainerDirective) {
  }

  ngOnInit(): void {
    const name = this.elementRef.nativeElement.textContent;
    this.href = this.baseUrl + this.appLearnxjs + this.learnxjsContainerDirective.appLearnxjsContainer + '/' + name.toLowerCase() + '.html';
  }

}
