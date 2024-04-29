const express = require('express')
const router = express.Router()

const Goat = require("../models/Goat")


router.get("/api/goats", async (req, res) => {
    try{
        const goats = await Goat.find({}).exec()

        console.log(goats)

        res.status(200).send(goats)
    } catch(e){
        console.log('error in /api/goats route', e)
        res.status(500).send(e)
    }
})

  // Create a new goat
  app.post('/goats', async (req, res) => {
    try {
      const newGoat = new Goat(req.body);
      const savedGoat = await newGoat.save();
      res.status(201).json(savedGoat);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Get all goats
  app.get('/goats', async (req, res) => {
    try {
      const goats = await Goat.find();
      res.status(200).json(goats);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Get a specific goat by ID
  app.get('/goats/:id', async (req, res) => {
    try {
      const goat = await Goat.findById(req.params.id);
      if (!goat) {
        res.status(404).json({ message: 'Goat not found' });
      } else {
        res.status(200).json(goat);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update a specific goat by ID
  app.put('/goats/:id', async (req, res) => {
    try {
      const updatedGoat = await Goat.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedGoat) {
        res.status(404).json({ message: 'Goat not found' });
      } else {
        res.status(200).json(updatedGoat);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Delete a specific goat by ID
  app.delete('/goats/:id', async (req, res) => {
    try {
      const deletedGoat = await Goat.findByIdAndDelete(req.params.id);
      if (!deletedGoat) {
        res.status(404).json({ message: 'Goat not found' });
      } else {
        res.status(200).json({ message: 'Goat deleted successfully' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });





module.exports = router;
