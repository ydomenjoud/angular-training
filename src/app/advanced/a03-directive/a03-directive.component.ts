import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a03-directive',
  templateUrl: './a03-directive.component.html',
  styleUrls: ['./a03-directive.component.css']
})
export class A03DirectiveComponent implements OnInit {

  directiveAdvancedCode1 = `
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
`;

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

  hovered(isHover: boolean) {
    console.log('isHover ', isHover);
  }

  ngOnInit() {
  }

}
