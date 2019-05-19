import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));

    document.body.className = 'skin-blue sidebar-mini';
  }

}
