import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || 0;

    // Add buffer to prevent flicker
    if (scrollY > 80 && !this.isScrolled) {
      this.isScrolled = true;
    } else if (scrollY < 40 && this.isScrolled) {
      this.isScrolled = false;
    }
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    console.log('Menu toggled:', this.mobileMenuOpen);
  }
}
