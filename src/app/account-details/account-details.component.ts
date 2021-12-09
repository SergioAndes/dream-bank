import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from '../services/accounts/account.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountModel} from '../models/accountModel';
import {AccountDetailModel} from '../models/AccountDetailModel';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit  {
  private idaccount: string;
  public accountDetails;
  dataSource;
  displayedColumns: string[] = ['date', 'description', 'currency', 'value', 'balance'];
  public accountName: string;

  constructor(private routes: Router,private sharedDataService:DataService, private accountService: AccountService, private route: ActivatedRoute,private router: Router) {
    this.idaccount = this.route.snapshot.paramMap.get('idAccount');
    this.accountName= sessionStorage.getItem("accountName")
  }


  ngOnInit(): void {
    this.getAccountDetail();
  }
  goToHome(): void {
    console.log("ds")
    this.routes.navigate(['home']);
  }

  getAccountDetail(): void {
    const details: Array<AccountDetailModel> = [];
    this.accountService.getAccoutDetails(this.idaccount).subscribe(data => {
      data.forEach(element => {
        const detail = new AccountDetailModel();
        detail.balance=element.balance
        detail.currency=element.currency
        detail.date=element.date
        detail.description=element.description
        detail.value=element.value
        details.push(detail)
      });
      this.dataSource=details;

    }, error => {
      console.log(error);
      Swal.fire('Oops...', 'Credenciales incorrectas', 'error');
    });
  }

}
