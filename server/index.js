const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("../db/queries");
// const dotenv = require(‘dotenv’).config();
const PORT_NUM = process.env.PORT;
//const PORT = 4000;
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));
// app.get("/", (request, response) => {
//   response.json({ info: "this is the get for /" });
// });

app.get("/gear", db.getAllGear);

app.get("/gear/:id", db.getGearItem);

app.post("/gear", db.postGear);

app.put("/gear/:id", db.updateGear);

app.delete("/gear/:id", db.deleteGear);

app.listen(PORT_NUM, () => console.log(`Server running on port ${PORT_NUM}`));
