const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Limb extends Model {}

Limb.init({
    name:{
        type: DataTypes.STRING
    },
    size:{
        type:DataTypes.DECIMAL(10,2)
    },
    pointA:{
        type: DataTypes.DECIMAL(20,10)
    },
    bodyB:{
        type: DataTypes.DECIMAL(20,10)
    },
    pointB_x:{
        type: DataTypes.DECIMAL(20,10)
    },
    pointB_y:{
        type: DataTypes.DECIMAL(20,10)
    },
    equipped:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    type:{
        type:DataTypes.STRING,
        default: "item"
    }
    
},{
        sequelize
    });
module.exports = Limb;