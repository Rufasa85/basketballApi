const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init({
    // add properites here, ex:
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            len:[2],
            isAlphanumeric:true
        }
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    primaryColor:{
        type: DataTypes.STRING,
        allowNull:false
    },
    accentColor:{
        type: DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
});

module.exports=Team