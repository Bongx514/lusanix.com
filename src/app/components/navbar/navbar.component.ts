import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  isMenuOpen = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}