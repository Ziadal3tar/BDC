import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesDragScrollDirective } from '../../services-drag-scroll.directive';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-can-we-help',
  standalone: true,
  imports: [CommonModule,ServicesDragScrollDirective,RouterModule],

  templateUrl: './can-we-help.component.html',
  styleUrl: './can-we-help.component.scss'
})
export class CanWeHelpComponent {
  WhoCanWeHelp = [
    { title: 'Who Can We Help 1',url:'help1', description: 'Description 1' },
    { title: 'Who Can We Help 2',url:'help2', description: 'Description 2' },
    { title: 'Who Can We Help 3',url:'help3', description: 'Description 3' },
    { title: 'Who Can We Help 4',url:'help4', description: 'Description 4' },
    { title: 'Who Can We Help 5',url:'help5', description: 'Description 5' }
  ];
}



