import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a03-directive',
  templateUrl: './a03-directive.component.html',
  styleUrls: ['./a03-directive.component.css']
})
export class A03DirectiveComponent implements OnInit {

  directiveAdvancedCode = `
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: 'code[appHighlight]',
})
export class HighlightDirective implements OnInit {

  @Input()
  languages = 'typescript';

  @Input()
  title = 'code';

  @Input()
  @HostBinding('class.expanded')
  expanded = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @Input()
  set code(code: string) {
    // inject highlight code
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      hljs.highlightAuto(code, [this.languages]).value
    );

    // inject title
    const el = this.renderer.createElement('h2');
    this.renderer.setProperty(
      el,
      'innerHTML',
      \`\${this.title} <span>\${this.languages}</span>\`
    );

    this.renderer.appendChild(
      this.elementRef.nativeElement,
      el
    );
  }

  @HostListener('click')
  toggleCode() {
    this.expanded = !this.expanded;
  }

  ngOnInit(): void {
    console.log('hightlight');
  }

}
`;

  directiveBasicCode = `
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

`;

  templateCall = `
<code
    appHighlight
    [code]="directiveCode"
    title="appHighlight">
</code>
`;

  constructor() {
  }

  ngOnInit() {
  }

}
