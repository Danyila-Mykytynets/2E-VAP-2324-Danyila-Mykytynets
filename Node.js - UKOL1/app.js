const express = require('express');
const path = require('path');
const Person = require('./person');

const app = express();
const port = 7707;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/random-person', (req, res) => {
  const randomPerson = new Person(getRandomName(), getRandomName(), getRandomId());
  res.json(randomPerson);
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