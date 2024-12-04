import { Producto } from '../types';

export const guardarProductos = (productos: Producto[]): void => {
  localStorage.setItem('inventario_productos', JSON.stringify(productos));
};

export const obtenerProductos = (): Producto[] => {
  const productos = localStorage.getItem('inventario_productos');
  return productos ? JSON.parse(productos) : [];
};

export const generarId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};