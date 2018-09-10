import { B01TemplateComponent } from 'src/app/bases/b01-template/b01-template.component';
import { B02DirectiveComponent } from 'src/app/bases/b02-directive/b02-directive.component';
import { B03InteractionComponent } from 'src/app/bases/b03-interaction/b03-interaction.component';
import { B04FormsComponent } from 'src/app/bases/b04-forms/b04-forms.component';
import { B05FormsReactiveComponent } from 'src/app/bases/b05-forms-reactive/b05-forms-reactive.component';
import { B06LifecycleComponent } from 'src/app/bases/b06-lifecycle/b06-lifecycle.component';

export const routes = [
  {path: 'b01', component: B01TemplateComponent},
  {path: 'b02', component: B02DirectiveComponent},
  {path: 'b03', component: B03InteractionComponent},
  {path: 'b04', component: B04FormsComponent},
  {path: 'b05', component: B05FormsReactiveComponent},
  {path: 'b06', component: B06LifecycleComponent}
];
