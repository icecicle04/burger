-- -- drop any prior database
-- DROP DATABASE IF EXISTS burgers_db;

-- creates new database for burgers
CREATE DATABASE burgers_db;
-- using new database
USE e4ndo8481l1cj973;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
    );