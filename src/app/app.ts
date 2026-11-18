import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  vistaActual: 'login' | 'catalogo' | 'ficha' = 'login';
  
  // Variables para Login
  correo = '';
  password = '';

  // Variables para Catálogo y Filtros
  categorias = ['Celulares', 'Laptops', 'Tablets', 'Accesorios', 'Audio', 'Wearables', 'Hogar inteligente'];
  categoriaSeleccionada = 'Todas';
  marcaSeleccionada = 'Todas';
  busqueda = '';

  // Producto seleccionado para la Ficha / Consulta Mixta
  productoSeleccionado: Producto | null = null;
  imagenActiva = '';

  productosMock: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Ultra 14"',
      marca: 'TechNova',
      categoria: 'Laptops',
      precio: 999.00,
      stock: 14,
      imagenPrincipal: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      galeria: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400'
      ],
      resenas: [
        {
          usuario: 'María Rodríguez',
          iniciales: 'MR',
          calificacion: 5.0,
          comentario: 'Excelente rendimiento y muy ligera. La batería dura todo el día. Ideal para trabajar y estudiar.',
          fecha: '12 may 2026',
          imagenes: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=150']
        },
        {
          usuario: 'Juan Pérez',
          iniciales: 'JP',
          calificacion: 4.0,
          comentario: 'Muy buena laptop, rápida y silenciosa. El diseño es moderno y la pantalla se ve increíble.',
          fecha: '28 abr 2026',
          imagenes: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=150']
        }
      ]
    },
    {
      id: 2,
      nombre: 'Smartphone Pro Max',
      marca: 'Apple',
      categoria: 'Celulares',
      precio: 1199.00,
      stock: 8,
      imagenPrincipal: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      galeria: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'],
      resenas: [
        {
          usuario: 'Laura Castro',
          iniciales: 'LC',
          calificacion: 5.0,
          comentario: 'La cámara nocturna es impresionante y la fluidez de la pantalla es de otro nivel.',
          fecha: '15 abr 2026',
          imagenes: []
        }
      ]
    },
    {
      id: 3,
      nombre: 'Audífonos Studio ANC',
      marca: 'SonicPro',
      categoria: 'Audio',
      precio: 129.99,
      stock: 25,
      imagenPrincipal: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      galeria: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
      resenas: []
    },
    {
      id: 4,
      nombre: 'Smartwatch Series X',
      marca: 'TechNova',
      categoria: 'Wearables',
      precio: 249.50,
      stock: 19,
      imagenPrincipal: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      galeria: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'],
      resenas: []
    }
  ];

  get productosFiltrados(): Producto[] {
    return this.productosMock.filter(p => {
      const matchCat = this.categoriaSeleccionada === 'Todas' || p.categoria === this.categoriaSeleccionada;
      const matchMarca = this.marcaSeleccionada === 'Todas' || p.marca === this.marcaSeleccionada;
      const matchTexto = p.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
      return matchCat && matchMarca && matchTexto;
    });
  }

  iniciarSesion() {
    this.vistaActual = 'catalogo';
  }

  cerrarSesion() {
    this.vistaActual = 'login';
  }

  abrirFicha(prod: Producto) {
    this.productoSeleccionado = prod;
    this.imagenActiva = prod.imagenPrincipal;
    this.vistaActual = 'ficha';
  }

  volverAlCatalogo() {
    this.vistaActual = 'catalogo';
  }

  agregarAlCarrito(nombreProd: string) {
    alert(`"${nombreProd}" agregado exitosamente al carrito (Control SQL simulado).`);
  }
}

// Exportación dual para evitar errores con main.ts y main.server.ts
export { AppComponent as App };