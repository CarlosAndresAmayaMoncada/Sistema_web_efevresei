<?php
include '../config/db.php';

class ProductosController {
    public function obtenerProductos() {
        global $pdo;
        $sql = "SELECT * FROM productos";
        $stmt = $pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function agregarProducto($nombre, $descripcion, $precio, $cantidad, $imagen) {
        global $pdo;
        $sql = "INSERT INTO productos (nombre, descripcion, precio, cantidad, imagen) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([$nombre, $descripcion, $precio, $cantidad, $imagen]);
    }

    public function eliminarProducto($id) {
        global $pdo;
        $sql = "DELETE FROM productos WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>