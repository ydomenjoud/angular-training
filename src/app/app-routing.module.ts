import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesModule } from 'src/app/bases/bases.module';

const routes: Routes = [
  {path: 'bases', loadChildren: () => BasesModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
