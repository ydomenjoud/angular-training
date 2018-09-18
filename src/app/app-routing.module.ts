import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesModule } from 'src/app/bases/bases.module';
import { AdvancedModule } from 'src/app/advanced/advanced.module';

const routes: Routes = [
  {path: 'bases', loadChildren: () => BasesModule},
  {path: 'advanced', loadChildren: () => AdvancedModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
