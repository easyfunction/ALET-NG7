import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-charts',
  templateUrl: './inline-charts.component.html',
  styleUrls: ['./inline-charts.component.scss']
})
export class InlineChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));

    document.body.className = 'skin-blue sidebar-mini';
  }

}
