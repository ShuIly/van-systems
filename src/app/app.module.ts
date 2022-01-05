import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { MobileTopBarComponent } from './mobile-top-bar/mobile-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MobileTopBarComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
