import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFillComponent } from './layout-fill/layout-fill.component';
import { DocsLayoutRoutingModule } from './docs-layout-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexRowFillComponent } from './flex-row-fill/flex-row-fill.component';
import { FlexRowFillWrapComponent } from './flex-row-fill-wrap/flex-row-fill-wrap.component';

@NgModule({
  imports: [
    CommonModule,
    DocsLayoutRoutingModule,
    MaterialModule
  ],
  declarations: [LayoutFillComponent, FlexRowFillComponent, FlexRowFillWrapComponent]
})
export class DocsLayoutModule { }
