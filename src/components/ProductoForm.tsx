import React, { useState, useEffect } from 'react';
import { Plus, Save } from 'lucide-react';
import { Producto } from '../types';
import { generarId } from '../utils/storage';

interface ProductoFormProps {
  onAgregarProducto: (producto: Producto) => void;
  onActualizarProducto?: (producto: Producto) => void;
  productoParaEditar?: Producto | null;
}

export const ProductoForm: React.FC<ProductoFormProps> = ({
  onAgregarProducto,
  onActualizarProducto,
  productoParaEditar
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagen: '',
    categoria: ''
  });

  useEffect(() => {
    if (productoParaEditar) {
      setFormData({
        nombre: productoParaEditar.nombre,
        descripcion: productoParaEditar.descripcion,
        precio: productoParaEditar.precio.toString(),
        stock: productoParaEditar.stock.toString(),
        imagen: productoParaEditar.imagen,
        categoria: productoParaEditar.categoria
      });
    }
  }, [productoParaEditar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productoData = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
      imagen: formData.imagen,
      categoria: formData.categoria,
      fechaRegistro: new Date().toISOString()
    };

    if (productoParaEditar) {
      onActualizarProducto?.({
        ...productoData,
        id: productoParaEditar.id
      });
    } else {
      onAgregarProducto({
        ...productoData,
        id: generarId()
      });
    }

    setFormData({
      nombre: '',
      descripcion: '',
      precio: '',
      stock: '',
      imagen: '',
      categoria: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {productoParaEditar ? 'Editar Producto' : 'Agregar Nuevo Producto'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.categoria}
            onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Ropa">Ropa</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Hogar">Hogar</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio</label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.precio}
            onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
          <input
            type="url"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.imagen}
            onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {productoParaEditar ? (
          <>
            <Save className="h-5 w-5 mr-2" />
            Guardar Cambios
          </>
        ) : (
          <>
            <Plus className="h-5 w-5 mr-2" />
            Agregar Producto
          </>
        )}
      </button>
    </form>
  );
};