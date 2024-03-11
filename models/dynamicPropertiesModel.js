const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const Product = require('./productModel');
const DynamicProperties = sequelize.define({
    property_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    value_type:{
        type:DataTypes.ENUM('STRING','CHAR','TEXT','INTEGER','BIGINT','FLOAT','DOUBLE','DECIMAL','BOOLEAN','DATE','DATEONLY','TIME','ENUM','JSON','JSONB','ARRAY'),
        allowNull:false
    },
    value:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    }
},{versionKey:false,timestamps:true});

const createDynamicProperties = async()=>{
    await DynamicProperties.sync({force:true});
    console.log('Dynamic Property table is created');
}

module.exports = {DynamicProperties,createDynamicProperties};