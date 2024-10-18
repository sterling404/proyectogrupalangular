import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  foods = [
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'hamburguesa-2', viewValue: 'Hamburguesa' },
    { value: 'completos-3', viewValue: 'Completos' },
    { value: 'papasfritas-4', viewValue: 'Papas Fritas' },
    { value: 'bebidas-3', viewValue: 'Bebidas' }
  ];

  imagePreview: string | null = null;
  buttonClass: string = 'small-button'; // Clase inicial para los botones

  // Manejar la selección de la imagen
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.buttonClass = 'full-width-button'; // Cambiar clase a full-width-button
      };
      reader.readAsDataURL(file);
    }
  }

  // Limpiar la imagen seleccionada
  onClearImage(): void {
    this.imagePreview = null;
    this.buttonClass = 'small-button'; // Volver a la clase de botón pequeño
  }
}

