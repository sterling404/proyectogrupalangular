
import { MainService } from 'src/app/services/main.service';
import { DetallesPedido } from 'src/app/interface/app-interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  platos!: DetallesPedido[]
  isLoading = false;

  constructor(private service: MainService,private snackBar: MatSnackBar, private router: Router,private carritoService: CarritoService){}
  showMessage(message: string) {
    this.snackBar.open(message)._dismissAfter(3000);
  }



  
  ngOnInit(): void {
    this.getAllplatos();
    console.log(this.platos);
  }
  agregarAlCarrito(platos:DetallesPedido) {
    this.carritoService.agregarProducto(platos);
  }

  getAllplatos() {
    this.isLoading = true;
    this.service.obtenerPlatos().subscribe(
      {next:(response) => {
          this.platos = response;
          console.log(this.platos);
        },
        error:()=>{
          this.isLoading=false;
         /*  this.showMessage('Error al cargar la noticia ') */
        }



    })
  }
  deletePlato(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este plato?')) {
      this.service.eliminarPlatos(id).subscribe({
        next: () => {
          this.platos = this.platos.filter((plato) => plato.id !== id); // Actualiza la lista local
          this.showMessage('Plato eliminado correctamente');
        },
        error: (error) => {
          console.error('Error al eliminar el plato:', error);
          this.showMessage('Error al eliminar el plato');
        },
      });
    }
  }
  editarPlato(plato: any) {
    this.service.setPlatoSeleccionado(plato); // Pasar el plato al servicio
    this.router.navigate(['/addProduc']); // Redirigir al componente de edición
  }

}
