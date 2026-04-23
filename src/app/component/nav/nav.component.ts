import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ScrollTransformDirective } from '../../scroll-transform.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollTransformDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isOpen = false;
  isScrolled = false;
  activeSection = '';

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  navigate(id: string) {
    this.scrollTo(id);
    this.closeMenu();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
