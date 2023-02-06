const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Trip extends Model {}


Trip.init({
    budget: {
        type: DataTypes.FLOAT
    },
    numTravellers: {
        type: DataTypes.INTEGER
    },
},{
    sequelize
});


module.exports = Trip;