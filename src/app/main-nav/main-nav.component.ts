import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  constructor(public router: Router) {}

  public navigate(): void {
    return this.router.url === '/login'
      ? this.navigateToHomePage()
      : this.navigateToLoginPage();
  }

  private navigateToHomePage(): void {
    this.router.navigateByUrl('/home');
  }

  private navigateToLoginPage(): void {
    this.router.navigateByUrl('/login');
  }
}
