import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'our-services', component: OurServicesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
