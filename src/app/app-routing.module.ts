import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from 'src/app/widget/widget/widget.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { FlotComponent } from './charts/flot/flot.component';
import { InlineChartsComponent } from './charts/inline-charts/inline-charts.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
