import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { CanWeHelpComponent } from "../can-we-help/can-we-help.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, CanWeHelpComponent, BlogsComponent, ServicesComponent, FooterComponent, ContactComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(){
  localStorage.clear()
}
}
