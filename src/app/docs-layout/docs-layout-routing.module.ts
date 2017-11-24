import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFillComponent } from './layout-fill/layout-fill.component';

const routes: Routes = [
  { path: '', component: LayoutFillComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsLayoutRoutingModule { }
