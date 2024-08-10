import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private AdminService:AdminService,private CategoryService:CategoryService) { }
  private admins = new BehaviorSubject<Boolean>(false);
  currentAdmins = this.admins.asObservable();
  updateAdmins() {
    this.AdminService.allAdmins().subscribe((data: any) => {
      this.admins.next(data.allUser);
    });
  }

  private categories = new BehaviorSubject<Boolean>(false);
  currentCategories = this.categories.asObservable();
  updateCategories() {
    this.CategoryService.allCategories().subscribe((data: any) => {
      this.categories.next(data.allCategories);
    });
  }
}
