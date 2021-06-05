require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("./src/config/paths");
const realisationRouter = require("./src/Routes/RealisationsRoute");

const app = express();

app.use(express.json());

app.use(cors());

app.use(path.realisationsBaseURI, realisationRouter);


const PORT = process.env.PORT || 8000



app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`)
})
