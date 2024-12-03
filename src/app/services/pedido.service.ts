import { Injectable } from '@angular/core';
// pedido.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/api/pedidos'; // URL de tu backend
  constructor(private http: HttpClient) { }

  obtenerPedidos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
   // Método para crear un nuevo pedido
   crearPedido(usuario_id: number, mesa: string, productos: any[]): Observable<any> {
    const pedido = {
      usuario_id,
      mesa,
      productos,
    };
    return this.http.post<any>(this.apiUrl, pedido);
  }
}
