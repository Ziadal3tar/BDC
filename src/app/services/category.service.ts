import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'https://bdc-apis-ziadal3tars-projects.vercel.app/category';

  constructor(private http: HttpClient) {}
  addCategory(data: any): any {
    return this.http.post(`${this.baseUrl}/addCategory`, data, {});
  }
  removeCategory(id: any): any {
    return this.http.get(`${this.baseUrl}/removeCategory/${id}`);
  }
  allCategories(): any {
    return this.http.get(`${this.baseUrl}/allCategory`);
  }
}
