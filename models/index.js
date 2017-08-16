var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day');






// Hotel.belongsToMany(Place); // hotel.placeIds hotel.addPlace, hotel.setPlace
// Place.hasMany(Hotel);       // hotel.placeIds place.addHotel, place.setHotel

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, { through: 'day_restaurants' });
Day.belongsToMany(Activity, { through: 'day_activities' });

module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity,
	Day
};
