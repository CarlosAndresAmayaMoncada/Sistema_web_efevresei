# Sistema de Inventario - Efevresei 📦

Sistema de gestión de inventario moderno y eficiente desarrollado con React y TypeScript.


## 🚀 Tecnologías Utilizadas

- **React**: Framework de JavaScript para la interfaz de usuario
- **TypeScript**: Superset de JavaScript con tipado estático
- **Tailwind CSS**: Framework de CSS para diseño moderno y responsivo
- **Lucide React**: Biblioteca de iconos modernos
- **LocalStorage**: Para persistencia de datos en el navegador
- **Vite**: Herramienta de desarrollo rápida para aplicaciones web

## 📁 Estructura del Proyecto

```
/src
  /components
    - Header.tsx         # Componente de encabezado
    - ProductoForm.tsx   # Formulario para agregar/editar productos
    - ProductoList.tsx   # Lista de productos con acciones
  /types
    - index.ts          # Definiciones de tipos TypeScript
  /utils
    - storage.ts        # Utilidades para manejo de LocalStorage
  - App.tsx             # Componente principal
  - main.tsx           # Punto de entrada
  - index.css          # Estilos globales
```

## ✨ Características

### Gestión de Productos
- ✅ Agregar nuevos productos
- ✅ Editar productos existentes
- ✅ Eliminar productos
- ✅ Ver listado de productos
- ✅ Filtrar por categoría
- ✅ Búsqueda por nombre o descripción

### Datos del Producto
- 📝 Nombre
- 📋 Descripción
- 💰 Precio
- 🔢 Cantidad en stock
- 🖼️ Imagen (URL)
- 📁 Categoría
- 📅 Fecha de registro

### Interfaz de Usuario
- 🎨 Diseño moderno y responsivo
- 📱 Adaptable a diferentes dispositivos
- 🔍 Búsqueda en tiempo real
- 🏷️ Filtrado por categorías
- 💫 Animaciones suaves

## 🛠️ Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Navegador web moderno

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
https://github.com/CarlosAndresAmayaMoncada/Sistema_web_efevresei.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 💻 Uso

1. **Agregar Producto**:
   - Click en "Agregar Nuevo Producto"
   - Llenar todos los campos requeridos
   - Proporcionar URL de imagen válida
   - Click en "Agregar Producto"

2. **Editar Producto**:
   - Click en el botón "Editar" del producto
   - Modificar los campos necesarios
   - Click en "Guardar Cambios"

3. **Eliminar Producto**:
   - Click en el botón "Eliminar" del producto
   - Confirmar la acción

4. **Filtrar Productos**:
   - Usar la barra de búsqueda para filtrar por nombre/descripción
   - Seleccionar categoría del menú desplegable

## 🔄 Persistencia de Datos

Los datos se almacenan en el LocalStorage del navegador, permitiendo:
- Persistencia entre sesiones
- Acceso rápido a los datos
- Funcionamiento sin conexión

## 🎯 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Exportación de datos a CSV/Excel
- [ ] Historial de cambios
- [ ] Categorías personalizables
- [ ] Modo oscuro
- [ ] Estadísticas y reportes

## 👨‍💻 Desarrollador

**Carlos Andrés Amaya Moncada**
- 📧 Email: caamaya3102@gmail.com

---

Desarrollado con ❤️ para Efevresei
