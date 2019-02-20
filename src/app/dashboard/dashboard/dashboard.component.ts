import { Component, OnInit } from '@angular/core';

import {dashboard2} from "src/assets/dist/js/pages/dashboard2.js";
import * as $ from 'src/assets/bower_components/jquery/dist/jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //window.dispatchEvent(new Event('resize'));
    $(dashboard2);
    document.body.className = 'skin-blue sidebar-mini';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }
}
