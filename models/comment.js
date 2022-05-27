const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comment extends Model {}

comment.init({
   
    title: {
         type: DataTypes.STRING,
         allowNull:false
    },
    body: {
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    sequelize
});

module.exports=comment