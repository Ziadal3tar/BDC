import { SharingService } from './services/sharing.service';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServicesComponent } from './component/services/services.component';
import { ARIS7Component } from './component/aris7/aris7.component';
import { CanWeHelpComponent } from './component/can-we-help/can-we-help.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { ControlPanelComponent } from './component/control-panel/control-panel.component';
import AOS from 'aos';
import { routes } from './app.routes';
AOS.init();

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    ARIS7Component,
    CanWeHelpComponent,
    ContactComponent,
    BlogsComponent,
    ServiceDetailsComponent,
    ControlPanelComponent,
    RouterModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'salam';
  constructor(private _SharingService: SharingService, private router: Router) {
    this._SharingService.updateAdmins();
    this._SharingService.updateCategories();
    this._SharingService.updateBlogs();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page without smooth scrolling
      }
    });
  }
}
