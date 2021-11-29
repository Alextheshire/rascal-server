const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Limb extends Model {}

Limb.init({
    name:{
        type: DataTypes.STRING
    },
    size:{
        type:DataTypes.DECIMAL
    },
    pointA:{
        type: DataTypes.DECIMAL
    },
    bodyB:{
        type: DataTypes.DECIMAL
    },
    pointB_x:{
        type: DataTypes.DECIMAL
    },
    pointB_y:{
        type: DataTypes.DECIMAL
    },
    equipped:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
    
})

module.exports = Limb;