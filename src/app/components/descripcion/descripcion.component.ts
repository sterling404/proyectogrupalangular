// descripcion.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Plato } from 'src/app/interface/app-interface';
import { PedidoService } from 'src/app/services/pedido.service'; // Importa el servicio
import { Router } from '@angular/router'; // Importa el router

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  carrito: Plato[] = [];
  total: number = 0;
  usuarioId: number = 1; // Este valor puede venir de la sesión del usuario
  mesa: string = 'Mesa 5';

  constructor(private carritoService: CarritoService,private pedidoService: PedidoService,private router: Router ) {}

  ngOnInit(): void {
    // Obtener el carrito desde el servicio
    this.carritoService.getCarrito().subscribe((productos) => {
      this.carrito = productos;
      this.total = this.carritoService.obtenerTotal();
    });
  }

  // Método para realizar el pedido
  realizarPedido() {
    // Mapeamos el carrito a un formato adecuado para el backend
    const productos = this.carrito.map((producto) => ({
      id: producto.id,
      cantidad: producto.cantidad,
      modificaciones: producto.modificaciones || '', // Aquí puedes agregar detalles si es necesario
    }));

    // Llamamos al servicio para crear el pedido
    this.pedidoService.crearPedido(this.usuarioId, this.mesa, productos).subscribe(
      (response) => {
        console.log('Pedido realizado:', response);
        alert('Pedido realizado con éxito!');
        this.carritoService.vaciarCarrito(); // Método para vaciar el carrito

        // Redirigir al inicio
        this.router.navigate(['']); // 
        // Puedes redirigir a otra página o limpiar el carrito
      },
      (error) => {
        console.error('Error al realizar el pedido:', error);
        alert('Hubo un error al realizar el pedido');
      }
    );
  }
}
