import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { DetallesPedido } from 'src/app/interface/app-interface';
import {Plato } from 'src/app/interface/app-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  value: number = 2;
  showCarShop: boolean = false;
  carrito: Plato[] = [];
  total: number = 0;
  


  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(carrito => {
      this.carrito = carrito;
      this.total = this.carritoService.obtenerTotal();
    });
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.carritoService.getCarrito().subscribe(carrito => {
      this.carrito = carrito;
      this.total = this.carritoService.obtenerTotal();
    });
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carritoService.getCarrito().subscribe(carrito => {
      this.carrito = carrito;
      this.total = this.carritoService.obtenerTotal();
    });
  }

  toggleCarShop() {
    this.showCarShop = !this.showCarShop;
  }

  increment(producto: Plato) {
    if (producto.cantidad < 20) {
      producto.cantidad++;
      this.carritoService.actualizarProducto(producto);
    }
  }

  decrement(producto: Plato) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.carritoService.actualizarProducto(producto);
    }
  }
  
  // Redirige al componente de descripción pasando los datos del carrito
  continuarPedido(): void {
    this.router.navigate(['/descripcion'], {
      state: { carrito: this.carrito, total: this.total }
    });
  }
  get totalCantidad(): number {
    return this.carrito.reduce((total, producto) => total + producto.cantidad, 0);
  }
}