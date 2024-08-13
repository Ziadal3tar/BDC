import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'https://bdc-apis-4q2kaab94-ziadal3tars-projects.vercel.app/user';

  constructor(private http: HttpClient) {}
  addAdmin(data: any): any {
    return this.http.post(`${this.baseUrl}/addUser`, data, {});
  }
  removeAdmin(id: any): any {
    return this.http.get(`${this.baseUrl}/removeUser/${id}`);
  }
  allAdmins(): any {
    return this.http.get(`${this.baseUrl}/allUser`);
  }
  logIn(data: any):any {
    return this.http.post(`${this.baseUrl}/logIn`, data, {});
  }
}
