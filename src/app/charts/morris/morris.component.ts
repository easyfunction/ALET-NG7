import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-morris',
  templateUrl: './morris.component.html',
  styleUrls: ['./morris.component.scss']
})
export class MorrisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));

    document.body.className = 'skin-blue sidebar-mini';
  }

}
