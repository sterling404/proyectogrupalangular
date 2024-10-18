import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  nombreProducto: string = 'Completo';
  descripcionProducto: string = `Pan
plata
vionesa
Tomate`;

  constructor() { }

  // Aquí puedes agregar funcionalidades para los botones
}
