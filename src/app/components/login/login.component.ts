import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public remeberMe = false;
  public formGroup!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false, Validators.required),
    });
  }

  onSubmit(): void {
    this.formGroup.controls['remember'].setValue(this.remeberMe);
    this.router.navigateByUrl('logged-ui');
    console.log(this.formGroup.value);
  }

  handleRememberChange(event: any): void {
    if (event) {
      this.remeberMe = !this.remeberMe;
    }
  }
}
