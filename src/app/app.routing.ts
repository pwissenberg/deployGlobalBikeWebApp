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
    
    {path: 'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/intro', component: IntroComponent},
    {path: 'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/impressum', component: ImpressumComponent},
    {path:'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/schritt-1', component: Schritt1Component},
    {path:'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/schritt-2', component: Schritt2Component},
    {path:'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/schritt-3', component: Schritt3Component},
    {path:'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/schritt-4', component: Schritt4Component},
    {path:'ichliebeSAP-S4HANA-viel-Spass-beim-ausprobieren/schritt-5', component: Schritt5Component},
    { path: '', component: ContactComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);