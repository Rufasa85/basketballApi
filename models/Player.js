const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init({
    // add properites here, ex:
    firstName: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:5,
            max:18
        }
    },
    jerseyNumber:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0,
            max:99
        }
    },
    position:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:[["PG","SG","SF","PF","C"]]
        }
    },
},{
    sequelize,
});

module.exports=Player
