import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvancedContainerComponent } from 'src/app/advanced/advanced-container/advanced-container.component';
import { AdvancedRoutingModule } from 'src/app/advanced/advanced-routing.module';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { A02InjectionComponent } from 'src/app/advanced/a02-injection/a02-injection.component';
import { A03DirectiveComponent } from 'src/app/advanced/a03-directive/a03-directive.component';
import { A04PipeComponent } from 'src/app/advanced/a04-pipe/a04-pipe.component';
import { A05ObservableComponent } from 'src/app/advanced/a05-observable/a05-observable.component';
import { A06HttpRequestComponent } from 'src/app/advanced/a06-http-request/a06-http-request.component';
import { SaveCancelComponent } from './a05-observable/save-cancel/save-cancel.component';
import { SelectNumberComponent } from './a05-observable/select-number/select-number.component';
import { SelectNumberTimeoutComponent } from './a05-observable/select-number-timeout/select-number-timeout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SquarePipe } from 'src/app/advanced/square.pipe';
import { TodosService } from 'src/app/advanced/todos.service';
import { CountdownComponent } from 'src/app/advanced/a05-observable/countdown/countdown.component';
import { LearnxjsDirective } from './a05-observable/learnxjs.directive';
import { LearnxjsContainerDirective } from './a05-observable/learnxjs-container.directive';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    TodosService
  ],
  declarations: [
    AdvancedContainerComponent,
    A01RoutingComponent,
    A02InjectionComponent,
    A03DirectiveComponent,
    A04PipeComponent,
    A05ObservableComponent,
    A06HttpRequestComponent,
    SquarePipe,
    SaveCancelComponent,
    SelectNumberComponent,
    SelectNumberTimeoutComponent,
    CountdownComponent,
    LearnxjsDirective,
    LearnxjsContainerDirective
  ]
})
export class AdvancedModule {
}
