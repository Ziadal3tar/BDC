import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ControlPanelComponent } from './component/control-panel/control-panel.component';
import { LoginComponent } from './component/login/login.component';
import { loginGuard } from './services/login.guard';
import { ARIS7Component } from './component/aris7/aris7.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:LoginComponent},
  {path: 'admin/:adminName',canActivate:[loginGuard], component:ControlPanelComponent},
  {path: 'blog/:blogName', component:ServiceDetailsComponent},
  { path: 'services/AutismProgram', component: ARIS7Component }, // Static route should come first
  { path: 'services/:serviceName', component: ServiceDetailsComponent }, // Dynamic route
  {path: 'help/:helpName', component:ServiceDetailsComponent},
  { path: '**', redirectTo: 'home' }
];
