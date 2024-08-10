import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesDragScrollDirective } from '../../services-drag-scroll.directive';
@Component({
  selector: 'app-services',

  standalone: true,

imports: [CommonModule,ServicesDragScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { title: ' Brain Training', description: 'Description 1' },
    { title: 'Autism Program', description: 'Description 2' },
    { title: 'Family Program', description: 'Description 3' },
    { title: 'PASS Programs', description: 'Description 4' },
    { title: 'Assessments', description: 'Description 5' }
  ];

}
