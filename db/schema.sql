-- Create a new database called 'burgers_db'

CREATE DATABASE burgers_db

-- drop any prior database
DROP DATABASE IF EXISTS burgers_db;

-- creates new database for burgers
CREATE DATABASE burgers_db;
-- using new database
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
    );