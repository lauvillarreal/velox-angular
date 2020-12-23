import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AppRoutes: Routes = [
  {
    path: '*',
    redirectTo: 'register'
  },
  { path: 'dashboard', component: DashboardComponent },
  {path:'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'user', component: UserComponent},

  {
    path: '**',
    redirectTo: 'register'
  }
]
