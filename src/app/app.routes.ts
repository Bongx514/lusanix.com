import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'our-services', component: OurServicesComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
