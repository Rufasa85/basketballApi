const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init({
    // add properites here, ex:
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    age:{
        type: DataTypes.INTEGER
    },
    jerseyNumber:{
        type: DataTypes.INTEGER
    },
    position:{
        type: DataTypes.STRING
    },
},{
    sequelize,
});

module.exports=Player