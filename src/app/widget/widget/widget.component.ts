import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = 'skin-blue sidebar-mini';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }
}
