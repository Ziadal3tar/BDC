import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTransformDirective } from '../../scroll-transform.directive';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollTransformDirective, FooterComponent, NavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  features = [
  {
    title: 'Improve Focus',
    desc: 'Train your brain to stay focused and eliminate distractions.'
  },
  {
    title: 'Boost Memory',
    desc: 'Enhance your ability to retain and recall information.'
  },
  {
    title: 'Mental Clarity',
    desc: 'Achieve a clear and organized thinking process.'
  }
];
}
