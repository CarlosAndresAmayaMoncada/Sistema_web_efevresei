import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductoForm } from './components/ProductoForm';
import { ProductoList } from './components/ProductoList';
import { Producto } from './types';
import { guardarProductos, obtenerProductos } from './utils/storage';
import { Search } from 'lucide-react';

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtro, setFiltro] = useState('');
  const [categoria, setCategoria] = useState('');
  const [productoParaEditar, setProductoParaEditar] = useState<Producto | null>(null);

  useEffect(() => {
    const productosGuardados = obtenerProductos();
    setProductos(productosGuardados);
  }, []);

  const handleAgregarProducto = (producto: Producto) => {
    const nuevosProductos = [...productos, producto];
    setProductos(nuevosProductos);
    guardarProductos(nuevosProductos);
  };

  const handleEliminarProducto = (id: string) => {
    const nuevosProductos = productos.filter(p => p.id !== id);
    setProductos(nuevosProductos);
    guardarProductos(nuevosProductos);
  };

  const handleEditarProducto = (producto: Producto) => {
    setProductoParaEditar(producto);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleActualizarProducto = (productoActualizado: Producto) => {
    const nuevosProductos = productos.map(p => 
      p.id === productoActualizado.id ? productoActualizado : p
    );
    setProductos(nuevosProductos);
    guardarProductos(nuevosProductos);
    setProductoParaEditar(null);
  };

  const productosFiltrados = productos.filter(producto => {
    const cumpleFiltroTexto = producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
                             producto.descripcion.toLowerCase().includes(filtro.toLowerCase());
    const cumpleCategoria = !categoria || producto.categoria === categoria;
    return cumpleFiltroTexto && cumpleCategoria;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <ProductoForm 
            onAgregarProducto={handleAgregarProducto}
            onActualizarProducto={handleActualizarProducto}
            productoParaEditar={productoParaEditar}
          />
        </div>
        
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Filtrar Productos</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </div>
            <select
              className="w-full md:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Ropa">Ropa</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Hogar">Hogar</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
        </div>

        {productosFiltrados.length > 0 ? (
          <ProductoList
            productos={productosFiltrados}
            onEliminarProducto={handleEliminarProducto}
            onEditarProducto={handleEditarProducto}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;