DROP DATABASE IF EXISTS soups_db;
CREATE DATABASE soups_db;

USE soups_db;

CREATE TABLE soups(
    id INT AUTO_INCREMENT NOT NULL,
    soup_name VARCHAR(100) NOT NULL,
    slurped BOOLEAN,
    PRIMARY KEY(id)
);