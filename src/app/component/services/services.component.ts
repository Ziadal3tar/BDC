import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesDragScrollDirective } from '../../services-drag-scroll.directive';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-services',

  standalone: true,

  imports: [CommonModule, ServicesDragScrollDirective, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  constructor(private _Route: Router) {}

  services = [
    { title: ' Brain Training',url: 'BrainTraining', description: 'Description 1' },
    { title: 'Autism Program',url: 'AutismProgram', description: 'Description 2' },
    { title: 'Family Program',url: 'FamilyProgram', description: 'Description 3' },
    { title: 'PASS Programs',url: 'PASSPrograms', description: 'Description 4' },
    { title: 'Assessments',url: 'Assessments', description: 'Description 5' },
  ];
  openInNewTab(url: string): void {
    let baseUrl = window.location.href.split('home')[0];
    const fullUrl = `${baseUrl}/services/${url}`;
    window.open(fullUrl, '_blank');
  }
}
