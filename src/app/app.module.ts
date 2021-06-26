import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Schritt1Component } from './schritt1/schritt1.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { IntroComponent } from './intro/intro.component';
import { routing } from './app.routing';
import { Schritt2Component } from './schritt2/schritt2.component';
import { Schritt3Component } from './schritt3/schritt3.component';
import { Schritt4Component } from './schritt4/schritt4.component';
import { Schritt5Component } from './schritt5/schritt5.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Schritt1Component,
    ImpressumComponent,
    IntroComponent,
    Schritt2Component,
    Schritt3Component,
    Schritt4Component,
    Schritt5Component,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
