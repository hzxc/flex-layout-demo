import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsLayoutResponsiveComponent } from './docs-layout-responsive.component';

const routes: Routes = [
  { path: '', component: DocsLayoutResponsiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsLayoutResponsiveRoutingModule { }
