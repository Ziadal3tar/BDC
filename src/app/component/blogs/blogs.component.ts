import { SharingService } from './../../services/sharing.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TruncatePipe } from '../../services/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { NavComponent } from "../nav/nav.component";
import { HyphenatePipe } from '../../services/hyphenate.pipe';
HyphenatePipe
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe, FormsModule, NavComponent,HyphenatePipe],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor(private SharingService: SharingService,private _Route: Router) {
    this.SharingService.currentBlogs.subscribe((data: any) => {
      this.blogs = data;
    });
    this.SharingService.currentCategories.subscribe((data: any) => {
      this.categories = data;
      console.log(data);

    });
  }

  openInNewTab(url: string): void {
    let baseUrl = window.location.href.split('home')[0];
    const fullUrl = `${baseUrl}/blog/${url}`;
    window.open(fullUrl, '_blank');
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
    let clicked = category.replace(/ /g, '')
    for (let i = 0; i < this.categories.length; i++) {
      const element = this.categories[i];
      let categoryId = element.category.replace(/ /g, '')
      console.log(clicked,categoryId);

      const checkbox :any = document.getElementById(
        `${categoryId}`
      ) as HTMLInputElement;
      if (categoryId !== clicked) {
        checkbox.checked = false;
      }
    }
    let checked = document.getElementById(clicked) as HTMLInputElement;

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
