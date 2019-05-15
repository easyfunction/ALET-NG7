import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [{
  "path": "charts/chartjs",
  "component": ChartjsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
