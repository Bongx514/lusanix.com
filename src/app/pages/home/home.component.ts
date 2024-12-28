import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  imports: [ 
    ServicesComponent,
    AboutComponent,
    ContactUsComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
