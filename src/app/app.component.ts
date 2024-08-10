
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent } from "./component/home/home.component";
import { NavComponent } from "./component/nav/nav.component";
import { AboutComponent } from "./component/about/about.component";
import { FooterComponent } from "./component/footer/footer.component";
import { ServicesComponent } from "./component/services/services.component";
import { ARIS7Component } from "./component/aris7/aris7.component";
import { CanWeHelpComponent } from "./component/can-we-help/can-we-help.component";
import { ContactComponent } from "./component/contact/contact.component";
import { BlogsComponent } from "./component/blogs/blogs.component";
import { ServiceDetailsComponent } from "./component/service-details/service-details.component";
import { ControlPanelComponent } from "./component/control-panel/control-panel.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, NavComponent, AboutComponent, FooterComponent, ServicesComponent, ARIS7Component, CanWeHelpComponent, ContactComponent, BlogsComponent, ServiceDetailsComponent, ControlPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'salam';
}
