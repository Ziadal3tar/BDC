import { SharingService } from './../../services/sharing.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { AdminService } from '../../services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {
  constructor(
    private _adminServices: AdminService,
    private _categoryService: CategoryService,
    private _SharingService: SharingService,
    private _BlogService: BlogService
  ) {
    this._SharingService.updateAdmins();
    this._SharingService.currentAdmins.subscribe((data: any) => {
      this.allAdmin = data;
    });
    this._SharingService.updateCategories();
    this._SharingService.currentCategories.subscribe((data: any) => {
      this.allCategories = data;
    });

    this._SharingService.updateBlogs();
    this._SharingService.currentBlogs.subscribe((data: any) => {
      this.allBlogs = data;
    });
  }
  adminName: any;
  adminPassword: any;
  adminErr: any;
  allAdmin: any;

  categoryName: any;
  categoryErr: any;
  allCategories: any;

  allBlogs:any
  blogCategory: any = '';
  addBlog: Boolean = false;
  title: string = 'Blog Details';
  inputTitle: string = 'Blog Title';
  inputDesc: string = 'Blog Description';
  inputTitleData: string = '';
  inputDescData: string = '';
  numOfPar: any;
  num: number = 0;
  image: any = '';
  loading:Boolean = false
  formData = new FormData();
  next() {

    this.formData.append(`category`, this.blogCategory.toString());
    if (this.numOfPar > 0) {
      this.formData.append(`numberOfParagraph`, this.numOfPar.toString());

      if (this.num === 0) {
        this.addBlogDetails();
      } else if (this.num <= this.numOfPar!) {
        this.addParagraph();
      } else {
        this.finalizeBlog();
      }
    }
  }

  addBlogDetails() {
    this.formData.append(`blogTitle`, this.inputTitleData);
    this.formData.append(`blogDescription`, this.inputDescData);

    this.resetInputFields();
    this.num++;
    this.updateFormForParagraph(this.num);
  }

  addParagraph() {
    this.formData.append(`paragraph${this.num}Title`, this.inputTitleData);
    this.formData.append(`paragraph${this.num}Description`, this.inputDescData);

    this.resetInputFields();
    this.num++;
    if (this.num <= this.numOfPar!) {
      this.updateFormForParagraph(this.num);
    } else {
      this.finalizeBlog();
    }
  }

  updateFormForParagraph(paragraphNumber: number) {
    this.title = `Paragraph ${paragraphNumber}`;
    this.inputTitle = `Paragraph ${paragraphNumber} Title`;
    this.inputDesc = `Paragraph ${paragraphNumber} Description`;
  }

  resetInputFields() {
    this.inputTitleData = '';
    this.inputDescData = '';
  }

  finalizeBlog() {

    this.loading = true
    this._BlogService.addBlog(this.formData).subscribe((response: any) => {
      console.log(response);
      if (response.message == 'Blog added successfully') {
        this.loading = true
        this.addBlog = false
        window.location.reload();

      }
    });
  }

  onImageSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const file = event.target.files[0];
    this.image = file;

    if (this.num >= 1) {
      this.formData.append(`paragraph${this.num}image`, this.image);
    } else {
      this.formData.append('blogImage', this.image);
    }
    inputElement.value = '';
    this.image = '';

  }

  isBlogDetails(): boolean {
    return this.title === 'Blog Details';
  }
  backToBlog() {
    this.title = `Blog Details`;
    this.inputTitle = `Blog Title`;
    this.inputDesc = `Blog Description`;
  }
  // -----------------
  addAdmin() {
    const adminData = {
      adminName: this.adminName,
      adminPassword: this.adminPassword,
    };
    this._adminServices.addAdmin(adminData).subscribe(
      (data: any) => {
        if (data.message == 'Admin added successfully') {
          this._SharingService.updateAdmins();
          this.adminErr = '';
          this.adminName = '';
          this.adminPassword = '';
        }
      },
      (err: HttpErrorResponse) => {
        this.adminErr = err.error.message;
      }
    );
  }
  removeAdmin(id: any) {
    this._adminServices.removeAdmin(id).subscribe(
      (data: any) => {
        if (data.message == 'removed') {
          this._SharingService.updateAdmins();
          this.adminErr = '';
        }
      },
      (err: HttpErrorResponse) => {
        this.adminErr = err.error.message;
      }
    );
  }
  // ----------------------
  addCategory() {
    const categoryData = {
      category: this.categoryName,
    };
    this._categoryService.addCategory(categoryData).subscribe(
      (data: any) => {
        if (data.message == 'Category added successfully') {
          this._SharingService.updateCategories();
          this.categoryErr = '';
          this.categoryName = '';
        }
      },
      (err: HttpErrorResponse) => {
        this.categoryErr = err.error.message;
      }
    );
  }
  removeCategory(id: any) {
    this._categoryService.removeCategory(id).subscribe(
      (data: any) => {
        if (data.message == 'removed') {
          this._SharingService.updateCategories();
          this.categoryErr = '';
        }
      },
      (err: HttpErrorResponse) => {
        this.categoryErr = err.error.message;
      }
    );
  }
  deleteBlog(id:any){
    this._BlogService.removeBlog(id).subscribe(
      (data: any) => {
        if (data.message == 'removed') {
          this._SharingService.updateBlogs();
        }
      }
    );
  }
}
