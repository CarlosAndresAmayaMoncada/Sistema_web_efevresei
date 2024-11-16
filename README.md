# Sistema de Inventarios - Productos Electrónicos Efevrései

Este proyecto es un sistema de inventarios desarrollado para la empresa **Productos Electrónicos Efevrései**. El sistema permite gestionar productos electrónicos, realizar operaciones CRUD (crear, leer, actualizar y eliminar) y visualizar datos en una interfaz interactiva.

---

## 🛠️ Tecnologías Utilizadas

- **PHP**: Para la lógica del servidor.
- **MySQL**: Como base de datos.
- **JavaScript**: Para interactividad y lógica del cliente.
- **CSS** y **Bootstrap**: Para diseño y estilización.
- **HTML**: Para la estructura del proyecto.

---

## 📁 Estructura del Proyecto

- `/assets/css`: Archivos de estilos CSS.
- `/assets/js`: Scripts JavaScript.
- `/assets/images`: Imágenes de los productos.
- `/config`: Configuración de la base de datos.
- `/controllers`: Lógica del servidor (CRUD).
- `/models`: Modelos de datos (vacío, para expansión futura).
- `/views`: Páginas web del sistema.
- `/reports`: Espacio para reportes futuros.
- `database.sql`: Archivo para crear e inicializar la base de datos.

---

## 🚀 Instalación y Configuración

### 1️⃣ Requisitos Previos

- PHP >= 7.4
- Servidor web (XAMPP, WAMP, Laragon, etc.)
- MySQL >= 5.7
- Navegador web

### 2️⃣ Instalación

1. Descarga y descomprime el proyecto en la carpeta raíz de tu servidor web (por ejemplo, `htdocs` para XAMPP).

2. Crea la base de datos importando el archivo `database.sql` en tu servidor MySQL:
   ```bash
   mysql -u [usuario] -p [nombre_base_datos] < database.sql
   ```

3. Configura el archivo de conexión en `config/db.php`:
   ```php
   $host = 'localhost';        // Servidor de base de datos
   $db = 'sistema_inventario'; // Nombre de la base de datos
   $user = 'root';             // Usuario de MySQL
   $password = '';             // Contraseña de MySQL
   ```

4. Asegúrate de que las extensiones de PHP necesarias (PDO, MySQL) estén habilitadas en tu configuración (`php.ini`).

### 3️⃣ Ejecución

1. Inicia el servidor web y MySQL.
2. Accede al sistema desde tu navegador:
   ```
   http://localhost/proyecto_inventario/views/productos.php
   ```

---

## 📋 Funcionalidades

1. **Gestión de Productos**:
   - Ver listado de productos.
   - Agregar nuevos productos con nombre, descripción, precio, cantidad e imagen.
   - Eliminar productos existentes.
   - Actualizar detalles de productos (pendiente de implementación).

2. **Interfaz Amigable**:
   - Diseño responsivo con Bootstrap.
   - Interacciones dinámicas con JavaScript.

3. **Base de Datos Precargada**:
   - 10 productos iniciales listos para probar.

---

## 🖼️ Capturas de Pantalla

1. **Listado de Productos**  
   _Pantalla de visualización con tabla interactiva._  
   _Ejemplo de imágenes precargadas de productos._

---

## 🛠️ Expansión Futura

- Implementar autenticación de usuarios.
- Generación de reportes en PDF.
- Funcionalidad de actualización de productos.

---

## 📧 Soporte

Para cualquier duda o problema, contacta al correo caamaya3102@gmail.com.

---

## 📝 Licencia

Este proyecto puedes usarlo, modificarlo y distribuirlo libremente.


¡Gracias por usar este sistema de inventarios! 💻🚀
