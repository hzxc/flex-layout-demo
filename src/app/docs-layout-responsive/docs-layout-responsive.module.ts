import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsLayoutResponsiveRoutingModule } from './docs-layout-responsive-routing.module';
import { ResponsiveLayoutDirectionsComponent } from './responsive-layout-directions/responsive-layout-directions.component';
import { MaterialModule } from '../shared/material/material.module';
import { MediaQueryStatusComponent } from './shared/media-query-status.component';
import { DocsLayoutResponsiveComponent } from './docs-layout-responsive.component';
import { ResponsiveRowColumnsComponent } from './responsive-row-columns/responsive-row-columns.component';

@NgModule({
  imports: [
    CommonModule,
    DocsLayoutResponsiveRoutingModule,
    MaterialModule
  ],
  declarations: [
    ResponsiveLayoutDirectionsComponent,
    MediaQueryStatusComponent,
    DocsLayoutResponsiveComponent,
    ResponsiveRowColumnsComponent,
  ]
})
export class DocsLayoutResponsiveModule { }
