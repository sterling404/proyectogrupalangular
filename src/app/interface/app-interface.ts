// Interfaz de Usuarios
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    contrasena: string;
    rol: 'cliente' | 'admin' | 'cocinero';
    fecha_creacion: string; // ISO date string
    status: 'activo' | 'inactivo';
  }
  
  // Interfaz de Platos
  export interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    ingredientes: string;
    imagen?: string;
    fecha_creacion: string; // ISO date string
    status: 'activo' | 'inactivo';
  }
  
  // Interfaz de Pedidos
  export interface Pedido {
    id: number;
    usuario_id: number;
    mesa: string;
    estado: 'pendiente' | 'preparando' | 'entregado' | 'cancelado';
    fecha: string; // ISO date string
    status: 'activo' | 'inactivo';
  }
  
  // Interfaz de Detalles del Pedido
  export interface DetallesPedido {
    id: number;
    pedido_id: number;
    plato_id: number;
    cantidad: number;
    modificaciones?: string;
    status: 'activo' | 'inactivo';
  }
  
  // Interfaz de Reseñas
  export interface Resena {
    id: number;
    pedido_id: number;
    usuario_id: number;
    comentario: string;
    calificacion: number; // entre 1 y 5
    fecha: string; // ISO date string
    status: 'activo' | 'inactivo';
  }
  
  // Interfaz de Mesas
  export interface Mesa {
    id: number;
    numero_mesa: string;
    estado: 'disponible' | 'ocupada';
    status: 'activo' | 'inactivo';
  }
  