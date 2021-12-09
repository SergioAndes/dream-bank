import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {RequestProductComponent} from './request-product/request-product.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account/:idAccount', component: AccountDetailsComponent },
  { path: 'sidemenu', component: SideMenuComponent },
  { path: 'requestProduct', component: RequestProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
