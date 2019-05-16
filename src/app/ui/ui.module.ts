import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class UiModule { }
