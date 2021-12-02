const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class EquippedItem extends Model {}

EquippedItem.init({
    
    name:{
        type: DataTypes.STRING
    },
    size:{
        type:DataTypes.DECIMAL(4,2)
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
    type:{
        type:DataTypes.STRING,
        default: "item"
    }
    
},{
        sequelize,
        timestamps:false
    });
module.exports = EquippedItem;