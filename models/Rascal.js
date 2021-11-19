const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Rascal extends Model {}

Rascal.init({
    name:{
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    happiness:{
        type: DataTypes.INTEGER
    },
    hunger:{
        type: DataTypes.INTEGER
    },
    attention:{
        type: DataTypes.INTEGER
    },
    energy:{
        type: DataTypes.INTEGER
    }
    
},{
    sequelize
});

module.exports = Rascal;

