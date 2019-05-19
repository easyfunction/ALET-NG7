import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from 'src/app/widget/widget/widget.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { FlotComponent } from './charts/flot/flot.component';
import { InlineChartsComponent } from './charts/inline-charts/inline-charts.component';
import { GeneralComponent } from './ui/general/general.component';
import { IconsComponent } from './ui/icons/icons.component';
import { ButtonsComponent } from './ui/buttons/buttons.component';
import { SlidersComponent } from './ui/sliders/sliders.component';
import { TimelineComponent } from './ui/timeline/timeline.component';
import { ModalsComponent } from './ui/modals/modals.component';
import { GeneralFormComponent } from './forms/general-form/general-form.component';
import { AdvancedFormComponent } from './forms/advanced-form/advanced-form.component';
import { EditorFormComponent } from './forms/editor-form/editor-form.component';
import { SimpleTableComponent } from './tables/simple-table/simple-table.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';

const routes: Routes = [
  {
    "path": "",
    "redirectTo": "login",
    "pathMatch": "full"
  }, {
    "path": "widget",
    "component": WidgetComponent
  }, {
    "path": "dashboard",
    "component": DashboardComponent
  }, {
    "path": "login",
    "component": LoginComponent
  }, {
    "path": "charts/chartjs",
    "component": ChartjsComponent
  }, {
    "path": "charts/morris",
    "component": MorrisComponent
  }, {
    "path": "charts/flot",
    "component": FlotComponent
  }, {
    "path": "charts/inlineCharts",
    "component": InlineChartsComponent
  }, {
    "path": "ui/general",
    "component": GeneralComponent
  }, {
    "path": "ui/icons",
    "component": IconsComponent
  }, {
    "path": "ui/buttons",
    "component": ButtonsComponent
  }, {
    "path": "ui/sliders",
    "component": SlidersComponent
  }, {
    "path": "ui/timeline",
    "component": TimelineComponent
  }, {
    "path": "ui/modals",
    "component": ModalsComponent
  }, {
    "path": "forms/general",
    "component": GeneralFormComponent
  }, {
    "path": "forms/advanced",
    "component": AdvancedFormComponent
  }, {
    "path": "forms/editors",
    "component": EditorFormComponent
  }, {
    "path": "tables/simple",
    "component": SimpleTableComponent
  }, {
    "path": "tables/data",
    "component": DataTableComponent
  }, {
    "path": "calendar/calendar",
    "component": CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
