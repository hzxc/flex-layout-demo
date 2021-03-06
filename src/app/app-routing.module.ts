import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './docs-layout/docs-layout.module#DocsLayoutModule', // Lazy load account module
  },
  {
    path: 'responsive',
    loadChildren: './docs-layout-responsive/docs-layout-responsive.module#DocsLayoutResponsiveModule', // Lazy load account module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
