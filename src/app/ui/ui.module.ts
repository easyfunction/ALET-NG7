import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [GeneralComponent, IconsComponent, ButtonsComponent, SlidersComponent, TimelineComponent, ModalsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class UiModule { }
