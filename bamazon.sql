CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (iTEM_id)
	);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES
("Shirt", "Clothing", 10, 5),
("PS4", "Electronics", 259, 10),
("MacBook", "Electronics", 999, 9),
("Pant", "Clothing", 30, 15),
("Sock", "Clothing", 4, 20),
("Shoe", "Clothing", 40, 10),
("Hat", "Clothing", 20, 8),
("Copper", "Beer", 8, 50),
("Jam Session", "Beer", 8, 40),
("iPhone", "Electronics", 500, 5);

SELECT * FROM Bamazon.products;
