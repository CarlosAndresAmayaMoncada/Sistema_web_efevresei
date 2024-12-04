export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoria: string;
  fechaRegistro: string;
}

export interface FilterOptions {
  categoria: string;
  busqueda: string;
}