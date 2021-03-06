const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firefighterSchema = new Schema({
  name: { type: String, required: true },
  station: { type: String, required: true },
  working: { type: Boolean, required: true },
});

const Firefighter = mongoose.model("Firefighter", firefighterSchema);

module.exports = Firefighter;
