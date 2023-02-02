require("dotenv").config();
const sequelize = require("./config/connection");
const { Player } = require("./models");
const seed = async ()=>{
    await sequelize.sync({force:true});
    const playa = await Player.create({
        firstName:"Joe",
        lastName:"Rehfuss",
        age:5,
        jerseyNumber:13,
        position:"Power Forward"
    })
    console.log(playa);
    process.exit(1)
};

seed();