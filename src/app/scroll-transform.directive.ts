import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTransform]',
  standalone: true,
})
export class ScrollTransformDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const offset = window.scrollY;
    const translateValue = offset * 1.5; // Adjust the division factor to control the speed of transformation
    const prefSec = document.getElementById('prefSec');
    if (prefSec) {
      prefSec.style.transform = `translateX(-${translateValue}px)`;
    }
  }
}
