import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value: number = 2;
  showCarShop: boolean = false; 

  toggleCarShop() {
    this.showCarShop = !this.showCarShop; 
  }

  increment() {
    if (this.value < 20) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }
}
