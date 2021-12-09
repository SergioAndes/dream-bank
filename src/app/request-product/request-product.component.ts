import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {ProductsService} from '../services/products/products.service';
import {AccountModel} from '../models/accountModel';
import {ProductModel} from '../models/ProductModel';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request-product',
  templateUrl: './request-product.component.html',
  styleUrls: ['./request-product.component.css']
})
export class RequestProductComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  public requestForm: FormGroup;
  submitted = false;
  public products: any;

  constructor( private producService: ProductsService, private route: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.requestFormInit();
    this.getProducts();
  }

  get f() {
    return this.requestForm.controls;
  }

  requestFormInit(): void {
    this.requestForm = this.formBuilder.group({
      product: [0, Validators.required],
      cellphone: ['', Validators.required],
      monthlyIncome: [, Validators.required],
    });
  }

  request() {
    console.log(this.requestForm);


    if (this.validatefields()) {
      return;
    }

    Swal.fire('Request success!', 'Your order has been sent successfully,<br>an advisor will contact you soon', 'success')
      .then(function() {
        window.location.href = "home";
      });;
  }

  cancel() {
    this.route.navigate(['home']);
  }

  validatefields(): boolean {
    console.log();
    this.submitted = true;
    if (this.requestForm.invalid) {
      return true;
    }
    return false;
  }

  getProducts(): void {
    const products: Array<ProductModel> = [];
    this.producService.getProducts().subscribe(data => {
      data.forEach(element => {
        const product = new ProductModel();
        product.code = element.code;
        product.name = element.name;
        products.push(product);
      });
      this.products = products;
    }, error => {
      console.log(error);
      Swal.fire('Oops...', 'Credenciales incorrectas', 'error')
    });
  }
}
