var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/shoesreviews');




var shoesSchema = mongoose.Schema({
	shoe_name: String,
	shoe_price: String,
	shoe_size: [],
	shoe_descpription: String
});



var ShoeDesc = mongoose.model('ShoeDesc', shoesSchema);

var shoeDesc = new ShoeDesc ({
	shoe_name: 'Air Force 1',
	shoe_price: '$190',
	shoe_size: [8,9,10,11],
	shoe_descpription: 'Best shoe ever'
});

let find = (gotThedescriptions) => {
	ShoeDesc.find({}, function(err, docs){
		if(err){
			console.log('error fetching descriptions from the database');
			return;
		}
		gotThedescriptions(docs);
	})
}

module.exports.find = find;









