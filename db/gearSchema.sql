CREATE TABLE gear(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    type VARCHAR(45) NOT NULL,
    quality VARCHAR(100),
    description VARCHAR(250) NOT NULL,
    price INT NOT NULL,
    date_added DATE,
    available BOOLEAN
);

-- Inserting into this table
INSERT INTO gear (name, type, quality, description, price, date_added, available)
VALUES('Elektron Octatrack', 'Sampler', 'Mint condition with very few hours spent on machine. Screen protector still on.', 'Super cool fun time', 800, '2022-09-22', true);

