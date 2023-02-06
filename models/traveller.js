const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Traveller extends Model {}


Traveller.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    unique: true,
    validate: {
        isEmail: true
    }
},{
    sequelize
});


module.exports = Traveller;