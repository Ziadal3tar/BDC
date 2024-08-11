import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ControlPanelComponent } from './component/control-panel/control-panel.component';
import { LoginComponent } from './component/login/login.component';
import { loginGuard } from './services/login.guard';

export const routes: Routes = [


  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:LoginComponent},
  {path: 'admin/:adminName',canActivate:[loginGuard], component:ControlPanelComponent},
  // {path: 'userProfile/:id',canActivate:[loginGuard], component:NavComponent},

];
