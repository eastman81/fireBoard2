const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function (req, res) {
    db.Firestation.find({})
      // what is this populate doing, is it supposed to add firefighters in?
      .populate("staff")
      // .sort({ date: -1 })
      .then((dbFirestation) => res.json(dbFirestation))
      .catch((err) => res.status(422).json(err));
  },
  // maybe this is how to add the firefighters in now?
  aggregateAll: function (req, res) {
    db.Firestation.aggregate([
      {
        $lookup: {
          from: "Firefighter",
          localField: "name",
          foreignField: "station",
          as: "staff",
        },
      },
    ]);
  },
  findById: function (req, res) {
    db.Firestation.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Firestation.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Firestation.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Firestation.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
