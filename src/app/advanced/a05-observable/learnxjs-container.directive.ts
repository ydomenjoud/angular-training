import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLearnxjsContainer]'
})
export class LearnxjsContainerDirective {

  @Input() appLearnxjsContainer;

  constructor() {
  }

}
