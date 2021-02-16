var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/multi');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error...'));
// db.once('open', () => {
//   console.log('Connected to mongoose')
// });

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
  billingZip: Number
});

module.exports = Multi = mongoose.model('Multi', multiSchema);

