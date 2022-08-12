create table customers (
    id serial primary key,
    first_name varchar(200),
    last_name varchar(300),
    email varchar(400)
);

create table items (
id serial primary key,
name varchar(200),
sku varchar(50),
inventory integer
)

create table purchases (
id serial primary key,
item_id integer references items(id),
purchase_qty integer
)
