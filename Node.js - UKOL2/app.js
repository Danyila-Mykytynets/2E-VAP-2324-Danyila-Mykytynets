const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 7707;

const connection = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/insert', (req, res) => {
  const newPerson = {
    firstName: getRandomName(),
    lastName: getRandomName(),
    id: getRandomId(),
  };

  connection.query('INSERT INTO persons SET ?', newPerson, (error, results) => {
    if (error) {
      console.error('Error inserting person into database:', error);
      res.status(500).json({ error: 'Error inserting person into database' });
    } else {
      console.log('Person inserted into database:', newPerson);
      res.status(200).json(newPerson);
    }
  });
});

app.get('/getAllPersons', (req, res) => {
  connection.query('SELECT * FROM persons', (error, results) => {
    if (error) {
      console.error('Error getting all persons from database:', error);
      res.status(500).json({ error: 'Error getting all persons from database' });
    } else {
      console.log('All persons retrieved from database:', results);
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getRandomName() {
  const names = ['John', 'Jane', 'Bob', 'Alice'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomId() {
  return Math.floor(Math.random() * 1000);
}