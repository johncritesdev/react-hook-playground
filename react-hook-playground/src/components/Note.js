import React, { useContext, useState, useEffect } from 'react';
import NotesContext from '../context/notes-context';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('setting up event');
    document.addEventListener('mousemove', (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    })
  }, []);



  return position;
}

const Note = ({ note }) => {

  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>x</button>
    </div>
  )
}

export { Note as default }