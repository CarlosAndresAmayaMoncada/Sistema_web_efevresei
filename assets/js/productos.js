fetch('/controllers/productosController.php?action=obtenerProductos')
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById("tablaProductos");
        tabla.innerHTML = data.map(producto => `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>
                    <button class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        `).join("");
    });