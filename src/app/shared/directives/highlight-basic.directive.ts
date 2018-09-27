import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlightBasic]'
})
export class HighlightBasicDirective {
  @Input()
  appHighlight = 'red';

  @Input()
  backgroundColor = '';

  @Output()
  hovered = new EventEmitter<boolean>();

  @HostBinding('style.background-color')
  color;

  constructor() {
  }

  @HostListener('mouseenter')
  hostMouseEnter() {
    this.color = this.appHighlight;
    this.hovered.emit(true);
  }

  @HostListener('mouseleave')
  hostMouseLeave() {
    this.color = '';
    this.hovered.emit(false);
  }
}
