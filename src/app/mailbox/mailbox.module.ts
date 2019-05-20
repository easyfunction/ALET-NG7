import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { ReadComponent } from './read/read.component';
import { LayoutModule } from '../layout/layout.module';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InboxComponent, ComposeComponent, ReadComponent],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    DirectivesModule
  ]
})
export class MailboxModule { }
