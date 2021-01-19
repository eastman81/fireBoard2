const mongoose = require("mongoose");

const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fireboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const firefighterSeed = [
  {
    name: "Red One",
    station: "Station 1",
    working: true,
  },
  {
    name: "Red Two",
    station: "Station 1",
    working: true,
  },
  {
    name: "Red Three",
    station: "Station 1",
    working: true,
  },
  {
    name: "Red Four",
    station: "Station 1",
    working: true,
  },
  {
    name: "Red Five",
    station: "Station 1",
    working: true,
  },
  {
    name: "Blue One",
    station: "Station 2",
    working: true,
  },
  {
    name: "Blue Two",
    station: "Station 2",
    working: true,
  },
  {
    name: "Blue Three",
    station: "Station 2",
    working: true,
  },
  {
    name: "Blue Four",
    station: "Station 2",
    working: true,
  },
  {
    name: "Blue Five",
    station: "Station 2",
    working: true,
  },
];

db.Firefighter.deleteMany({})
  .then(() => db.Firefighter.collection.insertMany(firefighterSeed))
  .then((data) => {
    console.log(data.result.n + " Firefighter records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
