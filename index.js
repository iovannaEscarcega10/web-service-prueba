const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const { ifError } = require('assert')

const PORT = process.env.PORT || 3005
const app = express()
app.use(bodyParser.json());

//MySQL
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mensajeria'
  });


//ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.get('/telefonos', (req, res) => {
  const sql = 'SELECT * FROM telefonos';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
