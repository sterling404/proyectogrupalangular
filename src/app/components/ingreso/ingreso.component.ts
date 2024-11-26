import { ImageUploadService } from 'src/app/services/image-upload.service';
import { MainService } from 'src/app/services/main.service';
import {
  Component,
  EventEmitter,
  Output,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit{
  imagePreview: string | null = null; // Vista previa local antes de la subida
  imagePath: string | null = null;    // Ruta de la imagen en el servidor
  buttonClass: string = 'small-button';

  myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    ingredientes: new FormControl('', Validators.required), // Aquí se guarda la ruta de la imagen
    imagen: new FormControl('', Validators.required), // Aquí se guarda la ruta de la imagen
  });

  constructor(private service: MainService, private imageUploadService: ImageUploadService,  private router: Router) {}

  ngOnInit(): void {
    this.service.getPlatoSeleccionado().subscribe((plato) => {
      if (plato) {
        this.myForm.patchValue({
          nombre: plato.nombre,
          descripcion: plato.descripcion,
          precio: plato.precio,
          categoria: plato.categoria,
          ingredientes: plato.ingredientes,
          imagen: plato.imagen,
        });
        this.imagePreview = plato.imagen; // Mostrar vista previa de la imagen
      }
    });
  }
  foods = [
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'hamburguesa-2', viewValue: 'Hamburguesa' },
    { value: 'completos-3', viewValue: 'Completos' },
    { value: 'papasfritas-4', viewValue: 'Papas Fritas' },
    { value: 'bebidas-3', viewValue: 'Bebidas' },
  ];

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
  
      this.imageUploadService.uploadImage(file).subscribe({
        next:(response) => {
          console.log('Ruta de la imagen subida:', response.imagePath); // Log para verificar
          this.imagePath = `http://localhost:3000${response.imagePath}`;
          this.myForm.get('imagen')?.setValue(this.imagePath); // Asignar al formulario
        },
        error:(error) => {
          console.error('Error al subir la imagen:', error);
        }
      }
      );
    }
  }
  

  saveForm() {
    if (this.myForm.valid) {
      console.log('Datos enviados al backend:', this.myForm.value);
      this.router.navigate(['']); // Log para depuración
      this.service.addPlatos(this.myForm.value).subscribe(
        (response) => {
          console.log('Plato creado con éxito:', response);
        },
        (error) => {
          console.error('Error al crear el plato:', error);
        }
      );
    } else {
      alert('Formulario no válido');
    }
  }
  

  onClearImage(): void {
    this.imagePreview = null;
    this.imagePath = null;
    this.myForm.get('imagen')?.reset();
  }
}
