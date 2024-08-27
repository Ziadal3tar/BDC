import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ScrollTransformDirective } from '../../scroll-transform.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,ScrollTransformDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isOpen: Boolean = false;
  scrollTo(sectionId: string) {
    // Wait for Angular to complete rendering
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  @HostListener('window:scroll', ['$event'])
  navBg(): void {
    const nav = document.getElementById('nav');

    if (window.scrollY >= 700) {
      if (nav) {
        nav.classList.add('scrolled');
      }
    } else {
      if (nav) {
        nav.classList.remove('scrolled');
      }
    }
  }
}
