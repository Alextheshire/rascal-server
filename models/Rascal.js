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
        type: DataTypes.DECIMAL(6,2)
    },
    hunger:{
        type: DataTypes.INTEGER
    },
    body:{
        type:DataTypes.STRING
    },
    coins:{
        type:DataTypes.INTEGER
    }
    
},{
    sequelize
});

module.exports = Rascal;

