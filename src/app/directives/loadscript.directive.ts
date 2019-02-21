import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLoadscript]'
})
export class LoadscriptDirective {

  @Input('appLoadscript') script: any;

  constructor() {  }

  ngOnInit() {
    let node = document.createElement('script');
    node.src = this.script;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
