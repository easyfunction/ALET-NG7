import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})

export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));

    document.body.className = 'skin-blue sidebar-mini';
  }

}
