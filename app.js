const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./src/helpers/mysql');
const routes = require('./src/routes');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

connection.connect(err => {
  if (err) throw err;
  console.log('Database has connected');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
