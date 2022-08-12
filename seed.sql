
-- create a customers
INSERT into customers(first_name, last_name, email) 
VALUES ('Anthony', 'White', 'anthonywhite967@gmail.com'),
('Tia', 'White', 'tiayuana@gmail.com');

-- create some items that customers can purchase
INSERT into items(name, sku, inventory)
VALUES ('Red Dress', 'A100', 50),
('Blue Dress', 'A101', 50),
('table', 'A102', 10),
('couch', 'A103', 19);

-- create a purchase
INSERT into purchases(item_id, purchase_qty)
VALUES (4, 1);