const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class UnlockedItem extends Model {}

UnlockedItem.init({
    item_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    size:{
        type:DataTypes.DECIMAL(4,2)
    },
    type:{
        type:DataTypes.STRING,
        default: "item"
    }
    
},{
        sequelize,
        timestamps:false
    });
module.exports = UnlockedItem;