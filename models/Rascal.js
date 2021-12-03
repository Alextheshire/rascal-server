const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Rascal extends Model {}

Rascal.init({
    name:{
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    xp: {
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    xpToLevelUp:{
        type:DataTypes.INTEGER,
        defaultValue:100
    },
    color:{
        type:DataTypes.STRING
    },
    happiness:{
        type: DataTypes.DECIMAL(7,3)
    },
    hunger:{
        type: DataTypes.DECIMAL(7,3)
    },
    care:{
        type:DataTypes.DECIMAL(7,3)
    },
    boredom:{
        type:DataTypes.DECIMAL(7,3)
    },
    body:{
        type:DataTypes.STRING
    },
    eyes:{
        type:DataTypes.STRING
    },
    mouth:{
        type:DataTypes.STRING
    },
    nose:{
        type:DataTypes.STRING
    },
    coins:{
        type:DataTypes.INTEGER
    }
    
},{
    sequelize
});

module.exports = Rascal;

