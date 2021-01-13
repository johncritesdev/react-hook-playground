import React from 'react';

const NoteList = () => {
  return notes.map((note) => (
    <Note key={note.title} note={note} removeNote={removeNote} />
  ))
}

export { NoteList as default }