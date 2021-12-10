import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {HomeComponent} from './home/home.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {BannerComponent} from './banner/banner.component';
import {DataService} from './data.service';
import {RequestProductComponent} from './request-product/request-product.component';
import {MatSelectModule} from '@angular/material/select';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TransactionDetailsComponent} from './transaction-details/transaction-details.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    AccountDetailsComponent,
    BannerComponent,
    RequestProductComponent,
    TransactionDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [DataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
