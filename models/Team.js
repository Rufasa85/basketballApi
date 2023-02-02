const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init({
    // add properites here, ex:
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
    primaryColor:{
        type: DataTypes.STRING
    },
    accentColor:{
        type: DataTypes.STRING
    },
},{
    sequelize,
    timestamps:false
});

module.exports=Team