import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as children } from 'src/app/advanced/advanced.routes';
import { AdvancedContainerComponent } from 'src/app/advanced/advanced-container/advanced-container.component';

const routes: Routes = [{
  path: '',
  component: AdvancedContainerComponent,
  children: children
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule {
}
