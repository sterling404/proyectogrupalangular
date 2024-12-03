import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

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
