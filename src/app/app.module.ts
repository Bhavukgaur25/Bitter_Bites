import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'

import {MatSidenavModule} from '@angular/material/sidenav'
import{MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider'
import{MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './sidebar/sidebar.component';
import {  HttpClientModule } from '@angular/common/http';
import { NewsCComponent } from './news-c/news-c.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Login2Component,
    SidebarComponent,
    NewsCComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
