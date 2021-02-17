var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/multi', { useFindAndModify: false });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error...'));

let multiSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  shipToLine1: String,
  shipToLine2: String,
  shipToCity: String,
  shipToState: String,
  shipToZip: Number,
  credit: Number,
  cvv: Number,
  billingZip: Number,
  purchaseComplete: Boolean
});

module.exports.Multi = mongoose.model('Multi', multiSchema);

