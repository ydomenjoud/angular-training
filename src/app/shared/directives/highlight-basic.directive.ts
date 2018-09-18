import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlightBasic]'
})
export class HighlightBasicDirective {
  @Input()
  appHighlight = 'red';

  @Input()
  bcolor = '';

  @Output()
  pimpMyCar = new EventEmitter();

  @HostBinding('style.background-color')
  color;

  constructor() {
  }

  @HostListener('mouseenter')
  hostMouseEnter() {
    this.color = this.appHighlight;
  }

  @HostListener('mouseleave')
  hostMouseLeave() {
    this.color = '';
  }
}
