const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./src/helpers/mysql');

connection.connect(err => {
  if (err) throw err;
  console.log('Database has connected');
})

app.get("/", (req, res) => {
  res.json("Hello world!")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
