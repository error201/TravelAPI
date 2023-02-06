const Location = require("./location");
const Trip = require("./trip");
const Traveller = require("./traveller");


Trip.hasMany(Traveller);
Traveller.belongsTo(Trip);


Trip.hasMany(Location);
Location.belongsTo(Trip);


module.exports = {
    Location,
    Trip,
    Traveller
};