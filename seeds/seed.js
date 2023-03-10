require("dotenv").config();
const sequelize = require("../config/connection.js");
const {Player,User,Team} = require("../models");


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
      TeamId:1
    },
    {
        firstName: "Henry",
        lastName: "Weigand",
        age: 12,
        jerseyNumber: 10,
        position: "SG",
        TeamId:1
    },
    {
        firstName: "Kevin",
        lastName: "Durant",
        age: 9,
        jerseyNumber: 35,
        position: "SF",
        TeamId:2
    },
    {
      firstName: "Joe",
      lastName: "Rehfuss",
      age: 13,
      jerseyNumber: 13,
      position: "PF",
      TeamId:1
    },
    {
        firstName: "Kai",
        lastName: "Ropp",
        age: 12,
        jerseyNumber: 14,
        position: "C",
        TeamId:1
    },
  ],{
    validate:true
  });
  const users = await User.bulkCreate([
    {
      email:"joe@joe.joe",
      password:"password"
    },
    {
      email:"Andy@joe.joe",
      password:"password1"
    }
  ],{
    validate:true,
    individualHooks:true
  })
  process.exit(1)
};

seed();
