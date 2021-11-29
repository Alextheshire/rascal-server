const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Rascal extends Model {}

Rascal.init({
    name:{
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    color:{
        type:DataTypes.STRING
    },
    happiness:{
        type: DataTypes.INTEGER
    },
    hunger:{
        type: DataTypes.INTEGER
    },
    love:{
        type: DataTypes.INTEGER
    },
    care:{
        type: DataTypes.INTEGER
    },
    body:{
        type:DataTypes.STRING
    }
    
},{
    sequelize
});

module.exports = Rascal;

