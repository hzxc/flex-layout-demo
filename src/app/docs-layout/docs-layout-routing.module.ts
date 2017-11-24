import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFillComponent } from './layout-fill/layout-fill.component';
import { FlexRowFillComponent } from './flex-row-fill/flex-row-fill.component';
import { FlexRowFillWrapComponent } from './flex-row-fill-wrap/flex-row-fill-wrap.component';

const routes: Routes = [
  { path: '', component: LayoutFillComponent },
  { path: 'rowfill', component: FlexRowFillComponent },
  { path: 'rowFillWrap', component: FlexRowFillWrapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsLayoutRoutingModule { }
