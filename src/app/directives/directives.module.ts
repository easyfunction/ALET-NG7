import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadscriptDirective } from './loadscript.directive';

@NgModule({
  declarations: [
    LoadscriptDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadscriptDirective
  ]
})
export class DirectivesModule { }
