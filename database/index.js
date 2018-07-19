var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/shoesreviews');

var shoesSchema = mongoose.Schema({
	shoe_name: String,
	shoe_price: String,
	shoe_size: [],
	shoe_descpription: String
});

var ShoeDesc = mongoose.model('ShoeDesc', shoesSchema);

