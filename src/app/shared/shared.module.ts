import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { HighlightBasicDirective } from './directives/highlight-basic.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    HighlightBasicDirective
  ],
  exports: [
    HighlightDirective,
    HighlightBasicDirective
  ]
})
export class SharedModule { }
