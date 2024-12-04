import React from 'react';
import { Boxes } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Boxes size={32} />
          <div>
            <h1 className="text-2xl font-bold">Sistema de Inventario</h1>
            <p className="text-sm">Efevresei</p>
          </div>
        </div>
        <div className="text-right text-sm">
          <p>Desarrollado por:</p>
          <p className="font-semibold">Carlos Andrés Amaya Moncada</p>
        </div>
      </div>
    </header>
  );
};