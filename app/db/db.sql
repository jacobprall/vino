-- \? -> shows commands in terminal
-- \l -> list database
-- CREATE DATABASE name -> creates database
-- \c name -> connect to a database
-- \d (name)-> list all tables (single table schema)
-- CREATE TABLE wines (
--   w_id BIGSERIAL NOT NULL,
--   brand VARCHAR(50),
--   type VARCHAR(50) NOT NULL,
--   year INT NOT NULL,
--   sweetness INT,
--   acidity INT,
--   tannin INT,
--   alcohol INT,
--   body INT,
--   rating INT NOT NULL,
--   location VARCHAR(50),
--   favorite boolean NOT NULL,
--   picture VARCHAR(100)
--   user_id BIGSERIAL REFERENCES users (id)
-- );

-- add column
-- ALTER TABLE wines ADD COLUMN favorite boolean NOT NULL;
-- ALTER TABLE wines ADD COLUMN location VARCHAR(50);

-- remove column
-- ALTER TABLE products DROP COLUMN featured boolean;

-- delete a database
-- DROP DATABASE pern_practice;

--insert into

-- INSERT INTO wines (brand, type, year, rating, favorite, user_id) VALUES ('test wine', 'bordeaux', 2021, 4, FALSE, 1);


-- FOR PROJECT RESTAURANTS
-- CREATE TABLE restaurants (
--     id BIGSERIAL NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     location VARCHAR(50) NOT NULL,
--     price_range INT NOT NULL check(price_range >= 1 and price_range <= 4)
-- );

