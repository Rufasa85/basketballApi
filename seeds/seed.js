require("dotenv").config();
const sequelize = require("../config/connection.js");
const Player = require("../models/Player");
const Team = require("../models/Team");

const seed = async () => {
  await sequelize.sync({ force: true });
  const teams = await Team.bulkCreate([
    {
      name: "Andrews",
      city: "Newtown",
      primaryColor: "gold",
      accentColor: "blue",
    },
    {
      name: "StateLiners",
      city: "Montague",
      primaryColor: "black",
      accentColor: "red",
    },
    {
      name: "Meteors",
      city: "Bothell",
      primaryColor: "Orange",
      accentColor: "Black",
    },
  ],{
    validate:true
  });
  const players = await Player.bulkCreate([
    {
      firstName: "Alex",
      lastName: "Hall",
      age: 11,
      jerseyNumber: 11,
      position: "PG",
    },
    {
        firstName: "Henry",
        lastName: "Weigand",
        age: 12,
        jerseyNumber: 10,
        position: "SG",
    },
    {
        firstName: "Kevin",
        lastName: "Durant",
        age: 9,
        jerseyNumber: 35,
        position: "SF",
    },
    {
      firstName: "Joe",
      lastName: "Rehfuss",
      age: 13,
      jerseyNumber: 13,
      position: "PF",
    },
    {
        firstName: "Kai",
        lastName: "Ropp",
        age: 12,
        jerseyNumber: 14,
        position: "C",
    },
  ],{
    validate:true
  });

  process.exit(1)
};

seed();
