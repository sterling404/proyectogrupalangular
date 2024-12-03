import { Injectable } from '@angular/core';
import { DetallesPedido } from 'src/app/interface/app-interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: DetallesPedido[] = [];

  constructor() {}

  // Obtener todos los productos en el carrito
  getCarrito() {
    return [...this.carrito];
  }

  // Agregar un producto al carrito
  agregarProducto(producto: DetallesPedido) {
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  // Eliminar un producto del carrito
  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }

  // Obtener el total del carrito
  obtenerTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.carrito = [];
  }
}
