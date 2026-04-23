import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesDragScrollDirective } from '../../services-drag-scroll.directive';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServicesDragScrollDirective,
    RouterModule,
    NavComponent,
    CarouselModule,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
 services = [
  {
    title: 'Brain Training',
    url: 'BrainTraining',
    description: 'Improve focus and cognitive performance.',
  },
  {
    title: 'Autism Program',
    url: 'AutismProgram',
    description: 'Specialized support for autism development.',
  },
  {
    title: 'Family Program',
    url: 'FamilyProgram',
    description: 'Help families build better communication.',
  },
  {
    title: 'PASS Programs',
    url: 'PASSPrograms',
    description: 'Cognitive training based on PASS theory.',
  },
  {
    title: 'Assessments',
    url: 'Assessments',
    description: 'Professional brain and behavior evaluation.',
  },
];

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      ' <i class="bi bi-caret-left-fill"></i> ',
      '<i class="bi bi-caret-right-fill"></i>',
    ],
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1151: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  };

  openInNewTab(url: string): void {
    let baseUrl = window.location.href.split('home')[0];
    const fullUrl = `${baseUrl}/services/${url}`;
    window.open(fullUrl, '_blank');
  }

  next() {}

  prev() {}
}
