console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
}

module.exports = {
  addNote,
  getAll
};
