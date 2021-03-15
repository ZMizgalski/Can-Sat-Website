import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .main-text {
        font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400));
        word-break: break-all;
        color: white;
        letter-spacing: 0.75px;
        font-weight: 700;
        text-align: center;
        max-width: 150px;
      }
      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media only screen and (max-width: 550px) {
        .main-text {
          font-size: calc(30px + (24 - 16) * (100vw - 400px) / (800 - 400));
        }
      }
      @media only screen and (min-width: 700px) {
        .main-text {
          max-width: 300px;
          word-break: normal;
        }
      }
    `,
  ],
})
export class HomeComponent {}
