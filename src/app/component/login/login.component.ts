import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private _Route: Router, private _AdminService: AdminService) {}
  adminName: any;
  adminPassword: any;
  errMessage: any ;
  num: any = 0;
  logIn() {
    let data = {
      adminName: this.adminName,
      adminPassword: this.adminPassword,
    };
    this._AdminService.logIn(data).subscribe(

      (data: any) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('login', 'true');
          this._Route.navigate([`/admin/${this.adminName}`]);
        }
      },
      (err: HttpErrorResponse) => {
        this.errMessage = err.error.message;
        this.num += 1;
        if (this.num == 3) {
          this._Route.navigate(['/home']);
        }
      }
    );
  }
}
