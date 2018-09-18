import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: 'code[appHighlight]',
})
export class HighlightDirective {

  @Input()
  language = 'typescript';

  @Input()
  title = 'code';

  @Input()
  @HostBinding('class.expanded')
  expanded = false;

  private readonly toggleClass = 'highlight_language';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @Input()
  set code(code: string) {
    // inject highlight code
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      hljs.highlightAuto(code, [this.language]).value
    );

    // inject title
    const el = this.renderer.createElement('h2');
    this.renderer.setProperty(
      el,
      'innerHTML',
      `${this.title} <span class="${this.toggleClass}">${this.language}</span>`
    );

    this.renderer.appendChild(
      this.elementRef.nativeElement,
      el
    );
  }

  @HostListener('click', ['$event'])
  toggleCode($event) {
    if ($event.target && $event.target.classList && $event.target.classList.contains(this.toggleClass)) {
      this.expanded = !this.expanded;
    }
  }


}
