import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class CalendarModule { }
