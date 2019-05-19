import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [SimpleTableComponent, DataTableComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class TablesModule { }
