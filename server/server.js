const mongoose = require('mongoose');
const express = require('express');
const app = express();
const connection = require("./config/connection");

const routes = require ("./routes/apiRoutes")

// const Schema = mongoose.Schema;

const Goat = require("./models/Goat")

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/goats_db'
//mongoose.connect("mongobd://localhost:27017/goats_db")

app.get("/api/goats", async (req, res) => {
  // const db = await connection; 
  try {
    const goats = await Goat.find();
    res.json(goats);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.json())
app.use(routes);


const PORT = process.env.PORT || 3014;

connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});