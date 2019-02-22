import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from 'src/app/login/login.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
