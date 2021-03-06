import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bases',
    loadChildren: './bases/bases.module#BasesModule'
  },
  {
    path: 'advanced',
    loadChildren: './advanced/advanced.module#AdvancedModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
