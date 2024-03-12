const sequelize = require('../config/db');
const DataTypes = require('sequelize'); 
const User = sequelize.define("Users",{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM('admin','telemarketer','agent','product_owner'),
        allowNull:false
    }
},{versionKey:false,timestamps:true});
 User.sync({force:true});


module.exports = {User};