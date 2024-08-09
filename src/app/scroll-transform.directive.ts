import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTransform]',
  standalone: true,
})
export class ScrollTransformDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.getElementById('nav');
    if (window.scrollY >= 650) {
      if (nav) {
        nav.style.backgroundColor = `#164e39`;
      }
    } else {
      if (nav) {
        nav.style.backgroundColor = `transparent`;
      }
    }
    const offset = window.scrollY;
    const translateValue = offset * 1.1; // Adjust the division factor to control the speed of transformation
    const prefSec = document.getElementById('prefSec');
    if (prefSec) {
      prefSec.style.transform = `translateX(-${translateValue}px)`;
    }
  }
}
