import { Injectable } from '@angular/core';
import { DetallesPedido } from 'src/app/interface/app-interface';
import { BehaviorSubject } from 'rxjs';
import {Plato } from 'src/app/interface/app-interface';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Plato[] = [];
  private carritoSubject = new BehaviorSubject<Plato[]>(this.carrito);

  getCarrito() {
    return this.carritoSubject.asObservable();
  }

  agregarProducto(producto: Plato) {
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    this.carritoSubject.next([...this.carrito]);
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.carritoSubject.next([...this.carrito]);
  }

  obtenerTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next([...this.carrito]);
  }
  // Método para actualizar la cantidad de un producto
  actualizarProducto(producto: Plato) {
    const index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.carrito[index].cantidad = producto.cantidad;
      this.carritoSubject.next([...this.carrito]);
    }
  }
}