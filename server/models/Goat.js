const { model, Schema } = require("mongoose");
const { hash, compare } = require("bcrypt");
const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;



const goatSchema = new Schema({
  name: { type: String, required: true },
  link: String,
  image: String,
  sex: String,
  awards: [{ type: Schema.Types.ObjectId, ref: 'Award' }],
  heightAtShoulder: Number,
  milkProduction: Number,
  DOB: String,
  maternal: { type: Schema.Types.ObjectId, ref: 'Goat' },
  paternal: { type: Schema.Types.ObjectId, ref: 'Goat' },
  maternalGrandparents: { type: Schema.Types.ObjectId, ref: 'Goat' },
  paternalGrandparents: { type: Schema.Types.ObjectId, ref: 'Goat' },
  kidsOn: [{ type: Schema.Types.ObjectId, ref: 'Goat' }],
  kidsOff: [{ type: Schema.Types.ObjectId, ref: 'Goat' }]
});





const Goat = mongoose.model('Goat', goatSchema);

module.exports = Goat;



/*
provide me with a mongoose model based on this comment: 
Goat Model:
    - name: str req
    - link: str 
    - awards: arr of refs to awards
    - height@shoulder: integer
    - milkproduction: integer
    - DOB: str
   - maternal - references goat model
   - paternal - references goat model
   - maternalGrandparents - references goat model
   - paternalGrandparents - references goat model
   - kidsOn- references array of goat models
   - kidsOff- references array of goat models

   once provided: how would i return(create a filter for) a list of goats that have the same milk production
*/