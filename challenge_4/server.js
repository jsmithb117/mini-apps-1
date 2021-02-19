const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use((req, res, next) => {
  console.log('serving stuff');
  next();
})
//time : { type : Date, default: Date.now }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/./client/dist'));


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})
