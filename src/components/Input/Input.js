import { useState } from 'react';
import './Input.css';

export default function Input({setNotes, url,}) {
  const [note, setNote] = useState('');
  
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (note === '') return;

    fetch(url, {
      method: 'POST',
      body: note,
    })
      .then((response) => response.json())
      .then((data) => setNotes(data.notes));
    
    setNote('');
  }

  const handlerChange = (e) => {
    setNote(e.target.value);
  }

  return (
    <form
      onSubmit={handlerSubmit}
    >
      <textarea
        onChange={handlerChange}
        value = {note}
      >
      </textarea>
      <button></button>
    </form>
  );
}
