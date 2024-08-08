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
    { title: 'Service 1', description: 'Description 1' },
    { title: 'Service 2', description: 'Description 2' },
    { title: 'Service 3', description: 'Description 3' },
    { title: 'Service 4', description: 'Description 4' },
    { title: 'Service 5', description: 'Description 5' }
  ];
  ddd(){
    console.log('gf');

  }
}
