
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'https://bdc-apis-ziadal3tars-projects.vercel.app/blog';

  constructor(private http: HttpClient) {}
  addBlog(data: any): any {
    return this.http.post(`${this.baseUrl}/addBlog`, data);
  }
  allBlogs(): any {
    return this.http.get(`${this.baseUrl}/allBlog`);
  }
  removeBlog(id: any): any {
    return this.http.get(`${this.baseUrl}/deleteBlog/${id}`);
  }
}
