import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class ChartsModule { }
