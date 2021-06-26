import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { IntroComponent } from './intro/intro.component';
import { Schritt1Component } from './schritt1/schritt1.component';
import { Schritt2Component } from './schritt2/schritt2.component';
import { Schritt3Component } from './schritt3/schritt3.component';
import { Schritt4Component } from './schritt4/schritt4.component';
import { Schritt5Component } from './schritt5/schritt5.component';


const APP_ROUTES = [
    
    {path: 'intro', component: IntroComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path:'schritt-1', component: Schritt1Component},
    {path:'schritt-2', component: Schritt2Component},
    {path:'schritt-3', component: Schritt3Component},
    {path:'schritt-4', component: Schritt4Component},
    {path:'schritt-5', component: Schritt5Component},
    { path: '', component: IntroComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);