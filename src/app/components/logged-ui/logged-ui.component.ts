import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-ui',
  templateUrl: './logged-ui.component.html',
  styleUrls: ['./logged-ui.component.css'],
})
export class LoggedUiComponent {
  public sensors = [
    { name: 'Temperatura', value: '60°C', endpoint: 'http://' },
    { name: 'Pyły', value: '40 μg/m3', endpoint: 'http://' },
    { name: 'Zanieczyszczenie', value: '100 µg/m3', endpoint: 'http://' },
    { name: 'Ciśnienienie', value: '1015 hPa', endpoint: 'http://' },
  ];

  constructor(private router: Router) {}

  public downloadData(data: any): void {
    console.log(data);
  }
  public logout(): void {
    this.router.navigateByUrl('home');
  }
}
