import { Routes } from '@angular/router';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { A02InjectionComponent } from 'src/app/advanced/a02-injection/a02-injection.component';
import { A03DirectiveComponent } from 'src/app/advanced/a03-directive/a03-directive.component';
import { A04PipeComponent } from 'src/app/advanced/a04-pipe/a04-pipe.component';
import { A05ObservableComponent } from 'src/app/advanced/a05-observable/a05-observable.component';
import { A06HttpRequestComponent } from 'src/app/advanced/a06-http-request/a06-http-request.component';


export const routes: Routes = [
  { path: 'a01', component: A01RoutingComponent},
  { path: 'a02', component: A02InjectionComponent},
  { path: 'a03', component: A03DirectiveComponent},
  { path: 'a04', component: A04PipeComponent},
  { path: 'a05', component: A05ObservableComponent},
  { path: 'a06', component: A06HttpRequestComponent},
];
