import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormComponent } from './general-form/general-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { EditorFormComponent } from './editor-form/editor-form.component';
import { DirectivesModule } from '../directives/directives.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [GeneralFormComponent, AdvancedFormComponent, EditorFormComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class FormsModule { }
