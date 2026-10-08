CREATE DATABASE IF NOT EXISTS pos;
USE pos;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description VARCHAR(500) NOT NULL,
    brand VARCHAR(100),
    img TEXT,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO products (name, price, stock, description, brand, img) VALUES
    ('Laptop Pro 14', 21999.00, 12, 'Laptop de 14 pulgadas para trabajo y estudio.', 'Nova', 'laptop-pro-14.jpg'),
    ('Mouse Inalambrico', 399.00, 45, 'Mouse inalambrico con conexion Bluetooth.', 'Nova', 'mouse-inalambrico.jpg'),
    ('Teclado Mecanico', 1299.00, 20, 'Teclado mecanico con retroiluminacion.', 'Keycraft', 'teclado-mecanico.jpg'),
    ('Monitor 24 Pulgadas', 3299.00, 18, 'Monitor Full HD de 24 pulgadas.', 'Vision', 'monitor-24.jpg'),
    ('Audifonos Bluetooth', 899.00, 35, 'Audifonos Bluetooth con microfono.', 'Soundix', 'audifonos-bluetooth.jpg');

SELECT * FROM products;