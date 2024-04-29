const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connection = require("./config/connection");

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

const PORT = process.env.PORT || 3014;

// connection.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
//   });
// });

connection.on("open", () => {
  app.listen(PORT, () => console.log("Server started on port", PORT));
})












// mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the Express server once connected to MongoDB
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });


  // const Goat = require('./models/Goat'); // Ensure the correct path to your Goat model

  // // Create a new goat
  // app.post('/goats', async (req, res) => {
  //   try {
  //     const newGoat = new Goat(req.body);
  //     const savedGoat = await newGoat.save();
  //     res.status(201).json(savedGoat);
  //   } catch (err) {
  //     res.status(400).json({ error: err.message });
  //   }
  // });
  
  // // Get all goats
  // app.get('/goats', async (req, res) => {
  //   try {
  //     const goats = await Goat.find();
  //     res.status(200).json(goats);
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // });
  
  // // Get a specific goat by ID
  // app.get('/goats/:id', async (req, res) => {
  //   try {
  //     const goat = await Goat.findById(req.params.id);
  //     if (!goat) {
  //       res.status(404).json({ message: 'Goat not found' });
  //     } else {
  //       res.status(200).json(goat);
  //     }
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // });
  
  // // Update a specific goat by ID
  // app.put('/goats/:id', async (req, res) => {
  //   try {
  //     const updatedGoat = await Goat.findByIdAndUpdate(
  //       req.params.id,
  //       req.body,
  //       { new: true }
  //     );
  //     if (!updatedGoat) {
  //       res.status(404).json({ message: 'Goat not found' });
  //     } else {
  //       res.status(200).json(updatedGoat);
  //     }
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // });
  
  // // Delete a specific goat by ID
  // app.delete('/goats/:id', async (req, res) => {
  //   try {
  //     const deletedGoat = await Goat.findByIdAndDelete(req.params.id);
  //     if (!deletedGoat) {
  //       res.status(404).json({ message: 'Goat not found' });
  //     } else {
  //       res.status(200).json({ message: 'Goat deleted successfully' });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  // //   }
  // });
  
