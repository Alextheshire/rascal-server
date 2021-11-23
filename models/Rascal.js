const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Rascal extends Model {}

Rascal.init({
    name:{
        type: DataTypes.STRING
    },
    age: {
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
    attention:{
        type: DataTypes.INTEGER
    },
    energy:{
        type: DataTypes.INTEGER
    },
    // attachments:{
    //     type: DataTypes.ARRAY(DataTypes.)
    // }
    
},{
    sequelize
});

module.exports = Rascal;

