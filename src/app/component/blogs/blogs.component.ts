import { SharingService } from './../../services/sharing.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../../services/truncate.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor(private SharingService: SharingService) {
    this.SharingService.currentBlogs.subscribe((data: any) => {
      this.blogs = data;
      console.log(data);
    });
    this.SharingService.currentCategories.subscribe((data: any) => {
      this.categories = data;
    });
  }

  categoryChecked: any;
  blogs: any[] = [];
  categories: any[] = [];
  searchText: any;
  searchCategory: any;
  searchByText() {
    this.SharingService.currentBlogs.subscribe((data: any) => {
      const regex = new RegExp(this.searchText, 'i'); // 'i' makes the search case-insensitive
      const filteredBlogs = data.filter((blog: any) => regex.test(blog.title));
      this.blogs = filteredBlogs;
    });
  }
  searchByCategory(category: any) {
    for (let i = 1; i < this.categories.length; i++) {
      const element = this.categories[i];
      const checkbox = document.getElementById(
        `category${i}`
      ) as HTMLInputElement;
      if (category !== `category${i}`) {
        checkbox.checked = false; // Uncheck other checkboxes
      }
    }
    let checked = document.getElementById(category) as HTMLInputElement;

    this.SharingService.currentBlogs.subscribe((blogs: any) => {
      if (checked.checked) {
        this.searchCategory = '';
        this.blogs = blogs;
      } else {
        this.searchCategory = category;
        this.blogs = blogs.filter((blog: any) => blog.category === category);
      }
    });
  }
}
