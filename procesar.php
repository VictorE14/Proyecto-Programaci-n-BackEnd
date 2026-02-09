<?php
header('Content-Type: text/html; charset=utf-8');

$host = 'localhost';
$dbname = 'contacto_form';
$user = 'root';
$pass = 'TuzDzidzV';

try {
    $pdo = new PDO("mysql:host=localhost;dbname=contacto_form;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<p style='color:green'>Conexión exitosa</p>";
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Acceso no permitido");
}

$nombre       = trim($_POST['first_name'] ?? '');
$apellido     = trim($_POST['last_name'] ?? '');
$email        = trim($_POST['email'] ?? '');
$query_type   = $_POST['query_type'] ?? '';
$mensaje      = trim($_POST['message'] ?? '');
$consent      = isset($_POST['consent']) ? 1 : 0;

if (empty($nombre) || empty($apellido) || empty($email) || 
    empty($mensaje) || !in_array($query_type, ['general', 'support']) || $consent !== 1) {
    die("Faltan datos obligatorios");
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO mensajes (nombre, apellido, email, query_type, mensaje, consentimiento)
        VALUES (?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([$nombre, $apellido, $email, $query_type, $mensaje, $consent]);
    
    // Éxito
    echo "<h2 style='color:green'>¡Datos guardados correctamente!</h2>";
    echo "<p>ID del registro: " . $pdo->lastInsertId() . "</p>";
    echo "<a href='index.html'>Volver</a>";
} catch (PDOException $e) {
    echo "<h2 style='color:red'>Error al guardar:</h2>";
    echo "<pre>" . $e->getMessage() . "</pre>";
}