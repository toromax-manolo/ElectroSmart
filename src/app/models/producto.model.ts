export interface Resena {
  usuario: string;
  iniciales: string;
  calificacion: number;
  comentario: string;
  fecha: string;
  imagenes: string[];
}

export interface Producto {
  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
  stock: number;
  imagenPrincipal: string;
  galeria: string[];
  resenas: Resena[];
}