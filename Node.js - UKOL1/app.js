const express = require('express');
const Person = require('./person');

const app = express();
const port = 7707;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static("./"));

app.get('/random-person', (req, res) => {
  const names = ['Anna', 'Petr', 'Lucie', 'Jakub'];
  const lastNames = ['Novák', 'Svoboda', 'Kovářová', 'Dvořák'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomId = Math.floor(Math.random() * 1000);
  const randomPerson = new Person(randomName, randomLastName, randomId);
  res.send(randomPerson);
});

app.listen(port, () => {
  console.log(`Server běží na adrese http://localhost:${port}/`);
});