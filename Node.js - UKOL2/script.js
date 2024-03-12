document.addEventListener('DOMContentLoaded', () => {
  const createPersonButton = document.getElementById('createPerson');
  const getAllPersonsButton = document.getElementById('getAllPersons');

  createPersonButton.addEventListener('click', createPerson);
  getAllPersonsButton.addEventListener('click', getAllPersons);

  function createPerson() {
    fetch('/insert', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => console.log('Person created:', data))
    .catch(error => console.error('Error creating person:', error));
  }

  function getAllPersons() {
    fetch('/getAllPersons')
    .then(response => response.json())
    .then(data => alert('All Persons:\n' + JSON.stringify(data)))
    .catch(error => console.error('Error getting all persons:', error));
  }
});
