import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'inheritance-impact-demo';
  // dataForA = { message: 'Initial Data for A' };

  // changeDataForA() {
  //   this.dataForA = { ...this.dataForA, message: 'Updated Data for A' };
  // }

  data = { message: 'Initial Data' };
}
