const Pool = require("pg").Pool;
const pool = new Pool({
  user: "ericfernandez",
  host: "localhost",
  database: "gearland",
  password: "",
  port: 5432,
});

// ENDPOINTS

// GET all gear
const getAllGear = (request, response) => {
  pool.query("SELECT * FROM gear", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

// GET a gear item
const getGearItem = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(`SELECT * FROM gear WHERE id=${id}`, (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

// POST to gear
const postGear = (request, response) => {
  const { name, type, quality, description, price, date_added, available } =
    request.body;
  pool.query(
    "INSERT INTO gear (name, type, quality, description, price, date_added, available) VALUES ($1, $2, $3, $4, $5, $6, $7",
    [name, type, quality, description, price, date_added, available],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    }
  );
};

// UPDATE a gear item
const updateGear = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, type, quality, description, price, date_added, available } =
    request.body;
  pool.query(
    "UPDATE gear SET name =$1, type = $2, quality = $3, description = $4, price = $5, date_added = $6, available = $7 WHERE id = $8",
    [name, type, quality, description, price, date_added, available, id],
    (error, results) => {
      if (error) throw error;
      response.status(200).send(`Gear modified with ID: ${id}`);
    }
  );
};

// DELETE a gear item
const deleteGear = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("DELETE FROM gear where id = $1", [id], (error, results) => {
    if (error) throw error;
    response.status(200).send(`Gear deleted with ID: ${id}`);
  });
};

module.exports = { getAllGear, getGearItem, postGear, updateGear, deleteGear };
