import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C01TemplateComponent } from './bases/c01-template/c01-template.component';
import { C02DirectiveComponent } from './bases/c02-directive/c02-directive.component';
import { C03InteractionComponent } from './bases/c03-interaction/c03-interaction.component';
import { C03ChildComponent } from 'src/app/bases/c03-interaction/c03-child/c03-child.component';
import { C04FormsComponent } from './bases/c04-forms/c04-forms.component';
import { C05FormsReactiveComponent } from './bases/c05-forms-reactive/c05-forms-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    C01TemplateComponent,
    C02DirectiveComponent,
    C03InteractionComponent,
    C03ChildComponent,
    C04FormsComponent,
    C05FormsReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
