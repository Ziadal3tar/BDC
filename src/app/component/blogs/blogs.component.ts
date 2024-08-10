import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  categoryChecked:any
  blogs:any[]=[1,2,3,4,1,1,1,1,1,1,1]
  categories:any[]=[
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
    'category 6',
    'category 7',
    'category 9',
    'category 10',
    'category 11',
    'category 12',
    'category 13',
    'category 14',
  ]

}
