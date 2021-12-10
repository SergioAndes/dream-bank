import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AccountDetailsComponent} from '../account-details/account-details.component';
import {AccountDetailModel} from '../models/AccountDetailModel';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
public transactionDetail:AccountDetailModel;
  constructor(@Inject(MAT_DIALOG_DATA)public data: any, public dialogRef: MatDialogRef<AccountDetailsComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.transactionDetail = this.data.transaction
  }

  close() {
    this.dialogRef.close();
  }

}
