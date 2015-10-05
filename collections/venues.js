Venues = new Mongo.Collection('venues');


var Schemas = {};

Schemas.Venues = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 150
	},
	description: {
		type: String,
		label: "Description",
		max: 300
	},
	openFrom: {
		type: Date,
		label: "From"
	},
	openTo: {
		type: Date,
		label: "To"
	},
	locationLongitude: {
		type: Number,
		decimal: true,
		label: "Longiture"
	},
	locationLattitude: {
		type: Number,
		decimal: true,
		label: "Lattitude"
	},
	drinks: {
		type: [String],
		label: "Serving",
		allowedValues: ["Beer", "Whiskey", "Tea"]
	}
});

Venues.attachSchema(Schemas.Venues);



dummyDateVenues = [
	{
		title: "Venue 1",
		description: "This is a short description of venue 1",
		openFrom: "2015-03-25T12:00:00",
		openTo: "2015-04-25T01:00:00",
		locationLongitude: -12323.3434,
		locationLattitude: 2134.23434,
		drinks: ["Beer", "Tea"]
	},
	{
		title: "Venue 2",
		description: "This is a short description of venue 1",
		openFrom: "2015-03-25T12:00:00",
		openTo: "2015-04-25T01:00:00",
		locationLongitude: -12323.3434,
		locationLattitude: 2134.23434,
		drinks: ["Beer", "Whiskey"]
	},
	{
	title: "Venue 3",
		description: "This is a short description of venue 1",
		openFrom: "2015-03-25T12:00:00",
		openTo: "2015-04-25T01:00:00",
		locationLongitude: -12323.3434,
		locationLattitude: 2134.23434,
		drinks: ["Tea"]
	}
];


if (Venues.find().count() === 0) {
	Venues.insert(dummyDateVenues[0]);
	Venues.insert(dummyDateVenues[1]);
	Venues.insert(dummyDateVenues[2]);
};
