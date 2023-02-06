const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Trip extends Model {}


Trip.init({
    budget: {
        type: DataTypes.FLOAT,
        numTravellers: DataTypes.INTEGER,
        travellerId: DataTypes
    }
},{
    sequelize
});


module.exports = Trip;