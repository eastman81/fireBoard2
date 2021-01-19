const mongoose = require("mongoose");

const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fireboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const firestationSeed = [
  {
    name: "Station 1",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 2",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 3",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 4",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 5",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 6",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 7",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 8",
    staffMin: 5,
    staff: [],
  },
  {
    name: "Station 9",
    staffMin: 5,
    staff: [],
  },
];

db.Firestation.deleteMany({})
  .then(() => db.Firestation.collection.insertMany(firestationSeed))
  .then((data) => {
    console.log(data.result.n + " Firestation records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
