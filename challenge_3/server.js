const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use((req, res, next) => {
  console.log('did stuff');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  console.log('req.body: ', req.body);
  res.send('sent');
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})