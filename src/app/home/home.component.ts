import {Component, OnDestroy, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {AccountService} from '../services/accounts/account.service';
import {AccountModel} from '../models/accountModel';
import {NavigationExtras, Router} from '@angular/router';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  message:string;
  subscription: Subscription;
  events: string[] = [];
  displayedColumns: string[] = ['position', 'type', 'accountName', 'status', 'currency', 'balance'];
  dataSource;
  public user: any;

  constructor(private sharedDataService: DataService,private route: Router, private accountService: AccountService) {
    const user = localStorage.getItem('user');
    const userparse = JSON.parse(user);
    this.user = userparse;
    this.getAccounts();

  }

  getAccounts() {
    const accounts: Array<AccountModel> = [];
    this.accountService.getAccountsXUser(this.user.id).subscribe(data => {
      data.forEach(element => {
        const account = new AccountModel();
        account.accountName = element.account;
        account.balance = element.balance;
        account.currency = element.currency;
        account.status = element.status;
        account.type = element.type;
        account.id = element.id;
        accounts.push(account);
      });
      this.dataSource = accounts;
      console.log(accounts);
    }, error => {
      console.log(error);
      Swal.fire('Oops...', 'Credenciales incorrectas', 'error');
    });
  }


  ngOnInit(): void {
    this.subscription = this.sharedDataService.currentMessage.subscribe(message => this.message = message)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  goToDetails(id: any, name:any) {
    let a = sessionStorage.setItem('accountName', name)
      this.route.navigate(['account/'+id]);
  }

  }
