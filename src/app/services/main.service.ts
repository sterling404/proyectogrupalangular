import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  URL = 'http://localhost:3000';

  private platoSeleccionado = new BehaviorSubject<any>(null); // Compartir datos entre componentes

  constructor(private http: HttpClient) {}

  // Método para establecer el plato seleccionado
  setPlatoSeleccionado(plato: any) {
    this.platoSeleccionado.next(plato);
  }

  // Método para obtener el plato seleccionado
  getPlatoSeleccionado(): Observable<any> {
    return this.platoSeleccionado.asObservable();
  }

  // Métodos existentes
  addPlatos(data: any): Observable<any> {
    return this.http.post(`${this.URL}/api/platos`, data);
  }

  obtenerPlatosid(id: number): Observable<any> {
    return this.http.get(`${this.URL}/api/platos/${id}`);
  }

  obtenerPlatos(): Observable<any> {
    return this.http.get(`${this.URL}/api/platos`);
  }

  actualisarPlatos(id: number, data: any): Observable<any> {
    return this.http.put(`${this.URL}/api/platos/${id}`, data);
  }

  eliminarPlatos(id: number): Observable<any> {
    return this.http.put(`${this.URL}/api/platos/${id}/eliminar`, {});
  }
}
