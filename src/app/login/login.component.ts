import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/users/user.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  submitted = false;

  constructor(private route: Router, private authService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerFormInit();

  }

  registerFormInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  login(): void {
    if (this.validatefields()){
      return;
    }
    this.authService.loginUser(this.registerForm.value).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.route.navigate(['home']);
    }, error => {
      console.log(error);
      Swal.fire('Oops...', 'Credenciales incorrectas', 'error');
    });
  }

  get f() {
    return this.registerForm.controls;
  }


  validatefields(): boolean {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return true;
    }
    return false;
  }
}
