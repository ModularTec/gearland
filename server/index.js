const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("../db/queries");
const dotenv = require(‘dotenv’).config();
// const PORT = process.env.PORT || 5000;
const PORT = parseInt(process.env.PORT_NUMBER || 5000);
// const PORT = process.env.PORT_NUMBER;
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ info: "this is the get for /" });
});

app.get("/gear", db.getAllGear);

app.get("/gear/:id", db.getGearItem);

app.post("/gear", db.postGear);

app.put("/gear/:id", db.updateGear);

app.delete("/gear/:id", db.deleteGear);

app.listen(PORT, () => {
  console.log(PORT, `App running on PORT ${PORT}.`);
});
