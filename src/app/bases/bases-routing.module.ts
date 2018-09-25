import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesContainerComponent } from 'src/app/bases/bases-container/bases-container.component';
import { routes as children } from 'src/app/bases/bases.routes';

const routes: Routes = [
  {
    path: '',
    component: BasesContainerComponent,
    children: children
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesRoutingModule {
}
