const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function (req, res) {
    db.Firefighter.find(req.query)
      .sort({ name: -1 })
      .then((dbFirefighter) => res.json(dbFirefighter))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Firefighter.findById(req.params.id)
      .then((dbFirefighter) => res.json(dbFirefighter))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Firefighter.create(req.body)
      .then((res) => {
        db.Firestation.findOneAndUpdate(
          // { name: res.station },
          {},
          { $push: { staff: res._id }},
          { new: true }
        );
      })
      .then((dbFirefighter) => res.json(dbFirefighter))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Firefighter.findOneAndUpdate({ _id: req.params.id }, req.body)
      // .then(({ _id }) =>
      //   db.Firestation.findOneAndUpdate(
      //     {},
      //     { $push: { staff: _id } },
      //     { new: true }
      //   )
      // )
      .then((dbFirefighter) => res.json(dbFirefighter))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Firefighter.findById({ _id: req.params.id })
      .then((dbFirefighter) => dbFirefighter.remove())
      .then((dbFirefighter) => res.json(dbFirefighter))
      .catch((err) => res.status(422).json(err));
  },
};
