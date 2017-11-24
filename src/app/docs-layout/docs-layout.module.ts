import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFillComponent } from './layout-fill/layout-fill.component';
import { DocsLayoutRoutingModule } from './docs-layout-routing.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    DocsLayoutRoutingModule,
    MaterialModule
  ],
  declarations: [LayoutFillComponent]
})
export class DocsLayoutModule { }
