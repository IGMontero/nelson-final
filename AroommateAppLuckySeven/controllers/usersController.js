const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const {gender, ageFrom, ageTo, preferences, accountType} = req.query;

    const queryParams = {};

    if (gender)
      queryParams.gender = gender;
    if (ageFrom && ageTo)
      queryParams.age = {
        $lte: ageTo,
        $gte: ageFrom
      };

    if (preferences) {
      queryParams.preferences = {
        $all: preferences
      }
    }

    if (accountType) {
      queryParams.accountType = accountType;
    }

    db.User
      .find(queryParams)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
