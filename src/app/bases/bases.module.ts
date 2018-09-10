import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasesRoutingModule } from 'src/app/bases/bases-routing.module';
import { BasesContainerComponent } from 'src/app/bases/bases-container/bases-container.component';
import { B01TemplateComponent } from 'src/app/bases/b01-template/b01-template.component';
import { B02DirectiveComponent } from 'src/app/bases/b02-directive/b02-directive.component';
import { B03InteractionComponent } from 'src/app/bases/b03-interaction/b03-interaction.component';
import { B03ChildComponent } from 'src/app/bases/b03-interaction/b03-child/b03-child.component';
import { B04FormsComponent } from 'src/app/bases/b04-forms/b04-forms.component';
import { B05FormsReactiveComponent } from 'src/app/bases/b05-forms-reactive/b05-forms-reactive.component';
import { B06LifecycleComponent } from './b06-lifecycle/b06-lifecycle.component';

@NgModule({
  imports: [
    CommonModule,
    BasesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BasesContainerComponent,
    B01TemplateComponent,
    B02DirectiveComponent,
    B03InteractionComponent,
    B03ChildComponent,
    B04FormsComponent,
    B05FormsReactiveComponent,
    B06LifecycleComponent
  ]
})
export class BasesModule {
}
