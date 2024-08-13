import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTransform]',
  standalone: true,
})
export class ScrollTransformDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // const nav = document.getElementById('nav');
    // if (window.scrollY >= 650) {
    //   if (nav) {
    //     nav.style.background = `linear-gradient(135deg, #000000, #000000 25%, #000000 70%, #00c7dc)`;
    //   }
    // } else {
    //   if (nav) {
    //     nav.style.background = `transparent`;
    //   }
    // }
    const offset = window.scrollY;
    const translateValue = offset * 1.1; // Adjust the division factor to control the speed of transformation
    const prefSec = document.getElementById('prefSec');
    if (prefSec) {
      prefSec.style.transform = `translateX(-${translateValue}px)`;
    }
  }
}
