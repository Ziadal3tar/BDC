import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTransformDirective } from '../../scroll-transform.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,ScrollTransformDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  items = [0, 1, 2, 3, 4, 5];
}
