import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { Producto } from '../types';

interface ProductoListProps {
  productos: Producto[];
  onEliminarProducto: (id: string) => void;
  onEditarProducto: (producto: Producto) => void;
}

export const ProductoList: React.FC<ProductoListProps> = ({
  productos,
  onEliminarProducto,
  onEditarProducto
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <p className="text-sm text-gray-600 mt-1">{producto.descripcion}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">
                ${producto.precio.toFixed(2)}
              </span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                Stock: {producto.stock}
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => onEliminarProducto(producto.id)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Eliminar
              </button>
              <button 
                onClick={() => onEditarProducto(producto)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Edit className="h-4 w-4 mr-1" />
                Editar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};