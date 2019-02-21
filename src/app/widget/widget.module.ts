import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,
    WidgetRoutingModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class WidgetModule { }
